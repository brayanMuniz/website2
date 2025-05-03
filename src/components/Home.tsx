import React from 'react';
import MahiroPfp from '../assets/mahiro.jpeg';

const Home: React.FC = () => {
  return (
    <div className="flex">
      {/* Main Content Area (Left) */}
      <div className="flex-grow p-8">
        <h1 className="text-4xl font-bold text-melon mb-4">Hello! I'm Brayan! 👋</h1>
        <div className='flex'>

          <p className="text-xl text-gray-700 mb-8 max-w-prose">
            Welcome to my little corner of the internet! I'm a Computer Science student who loves building things with code.
            I'm passionate about creating fun and useful web applications and always eager to learn new things.
            よろしくお願いします！
          </p>

          <img
            src={MahiroPfp}
            alt="Anime profile picture of Mahiro"
            className="rounded-full w-32 h-32 object-cover border-4 border-dutch-white flex-shrink-0 object-top"
          />
        </div>

      </div>

      {/* Sidebar (Right) */}
      <div className="w-80 bg-orchid-pink p-6 sticky top-0 h-screen overflow-y-auto">
        <div className="flex flex-col items-center mb-6">
        </div>

        {/* Table of Contents will go here */}
        <nav>
          <h3 className="text-xl font-bold mb-4 text-gray-800">Contents</h3>
          {/* Placeholder links for now */}
          <ul>
            <li className="mb-2"><a href="#about" className="text-gray-700 hover:text-gray-900">About Me</a></li>
            <li className="mb-2"><a href="#skills" className="text-gray-700 hover:text-gray-900">Skills</a></li>
            <li className="mb-2"><a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a></li>
            <li className="mb-2"><a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>


      </div>
    </div>
  );
};

export default Home;
