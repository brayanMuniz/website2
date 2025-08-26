import '../css/markdown.css';
import '../css/cat-latte.css';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';


const CTFPost: React.FC = () => {
  const { platform, slug } = useParams<{ platform: string; slug: string }>();
  const [content, setContent] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!platform || !slug) return;

    fetch(`/content/${platform}/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.text();
      })
      .then(setContent)
      .catch(() => setError(true));
  }, [platform, slug]);

  if (error) {
    return <div className="text-center text-red-600 mt-16">⚠️ Challenge not found.</div>;
  }

  return (
    <div className="ctf-post max-w-3xl mx-auto px-4 py-10">
      <ReactMarkdown
        className="markdown-body"
        children={content}
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeKatex]}
      />
    </div>
  );

};

export default CTFPost;

