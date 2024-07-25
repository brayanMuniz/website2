import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  return (
    <div className="Portfolio">


      <div className="bg-gray-800 text-gray-100 p-4 flex justify-between items-center">
        <div className="space-x-4">
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Discord</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
          <Link to="/notes/intro" className="text-blue-400 hover:underline">Notes</Link>
          <a href="#projects" className="text-blue-400 hover:underline">Projects</a>
        </div>
      </div>

    </div>
  );
};

export default Portfolio;

