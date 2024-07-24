import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import 'katex/dist/katex.min.css';

const NotePage: React.FC = () => {
  const { page } = useParams<{ page: string }>();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/notes/${page}.md`)
      .then(response => response.text())
      .then(text => setMarkdown(text));
  }, [page]);

  return (
    <div className="App">
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeKatex]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );

};

export default NotePage;

