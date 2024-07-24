import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw';
import remarkMath from 'remark-math'
import 'katex/dist/katex.min.css'

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/notes/LinearRegression.md`)
      .then(response => response.text())
      .then(text => setMarkdown(text));
  }, []);

  return (
    <div className="App">
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default App;

