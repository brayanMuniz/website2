import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Markdown
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import 'katex/dist/katex.min.css';

type LinkItem = {
  text: string;
  url: string;
};

const NotePage: React.FC = () => {
  const { page } = useParams<{ page: string }>();
  const [markdown, setMarkdown] = useState('');
  const [links, setLinks] = useState<LinkItem[]>([]);

  const extractLinks = (markdownText: string) => {
    const linkRegex = /(?<!\!)\[([^\]]+)\]\(([^)]+)\)/g;
    const foundLinks = new Set<LinkItem>();
    let match;
    while ((match = linkRegex.exec(markdownText)) !== null) {
      let link = match[2];
      if (link.startsWith('./')) {
        link = link.replace('./', '/notes/');
      }
      foundLinks.add({ text: match[1], url: link });
    }
    setLinks(Array.from(foundLinks));
  };


  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/notes/${page}.md`)
      .then(response => response.text())
      .then(text => {
        setMarkdown(text);
        extractLinks(text);
      });
  }, [page]);

  return (
    <div className="flex" data-theme="dark">

      <main className="markdown-body main-content w-10/12">
        <ReactMarkdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeKatex]}
        >
          {markdown}
        </ReactMarkdown>
      </main>

      <aside className="w-2/12">
        <ul>
          {links.map((link) => (
            <li key={link.url}>
              <Link to={link.url} replace>{link.text}</Link>
            </li>
          ))}
        </ul>
      </aside>

    </div>
  );

};

export default NotePage;

