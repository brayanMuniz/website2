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

    <div className="flex min-h-screen text-gray-100" data-theme="dark">
      <main className="markdown-body flex-grow p-8 w-4/5">
        <ReactMarkdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeKatex]}
        >
          {markdown}
        </ReactMarkdown>
      </main>

      <aside className="w-1/5 p-4 bg-gray-800">
        <ul className='flex flex-col space-y-4 mt-8 fixed top-0 mr-1 items-start'>
          {links.map((link) => (

            <li key={link.url} className="p-2">
              <Link to={link.url} className="text-blue-400 hover:text-blue-500 hover:underline text-lg">
                {link.text}
              </Link>
            </li>

          ))}
        </ul>
      </aside>
    </div>

  );

};

export default NotePage;

