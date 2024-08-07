import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

// Markdown imports
import ReactMarkdown from 'react-markdown';

import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';

import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';

import 'katex/dist/katex.min.css';
import '../css/tokyo-night.css'

type LinkItem = {
  text: string;
  url: string;
};

const NotePage: React.FC = () => {
  const navigate = useNavigate();
  const { page } = useParams<{ page: string }>();
  const [markdown, setMarkdown] = useState('');
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [items, setItems] = useState([]);

  // NOTE: json can only be gotten from the public directory
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/notes/notes.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setItems(data);
      })
      .catch(err => {
        console.error("Error fetching notes.json:", err);
      });
  }, []);

  const extractLinks = (markdownText: string) => {
    // eslint-disable-next-line no-useless-escape
    const linkRegex = /(?<!\!)\[([^\]]+)\]\(([^)]+)\)/g;
    const foundLinks = new Set<LinkItem>();
    let match;
    while ((match = linkRegex.exec(markdownText)) !== null) {
      let link = match[2];
      if (link.startsWith('./')) {
        link = link.replace('./', '/notes/');
      }

      // Remove markdown formatting from link text
      const plainText = match[1].replace(/\*\*(.*?)\*\*/g, '$1').replace(/__(.*?)__/g, '$1');
      foundLinks.add({ text: plainText, url: link });
    }
    setLinks(Array.from(foundLinks));
  };

  const removeMetadata = (markdownText: string) => {
    // Remove the metadata section
    return markdownText.replace(/---\n[\s\S]*?\n---\n/, '');
  };

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/notes/${page}.md`)
      .then(response => response.text())
      .then(text => {
        const cleanedText = removeMetadata(text);
        setMarkdown(cleanedText);
        extractLinks(cleanedText);
      });
  }, [page]);

  const handleOnSelect = (item: any) => {
    // the item selected
    console.log("SELECT", item);
    navigate(`/notes/${item.id}`); // Navigate to the selected note page
  };

  const formatResult = (item: any) => {
    return (
      <div className="group relative z-10">
        <span className="block text-left">{item.name}</span>
      </div>
    );
  }

  return (

    <div className="flex min-h-screen text-gray-100" data-theme="dark">
      <main className="markdown-body flex-grow p-8 w-full md:w-4/5 overflow-auto">
        <ReactMarkdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeKatex, rehypeHighlight]}
        >
          {markdown}
        </ReactMarkdown>
      </main>

      <aside className="hidden md:block w-1/5 p-4 bg-gray-800">
        <div className='mb-4'>
          <ReactSearchAutocomplete
            items={items}
            onSelect={handleOnSelect}
            autoFocus
            formatResult={formatResult}
          />
        </div>

        <ul className='flex flex-col space-y-4 mt-8 mr-1 items-start'>
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

