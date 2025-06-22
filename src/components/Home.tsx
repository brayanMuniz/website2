import React from 'react';
import MahiroPfp from '../assets/mahiro.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';

import University from "./University";
import Development from "./Development";
import Projects from "./Projects";

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen">

      {/* Main Content Area (Left) */}
      <div className="flex-grow px-4 sm:px-4 md:px-12 lg:px-40 pt-16 pb-16">
        <h1 className="text-4xl font-bold text-melon mb-4">Hello! I'm Brayan! 👋</h1>

        <div className='flex'>

          <p className="text-xl text-gray-700 mb-8 max-w-prose">
            Welcome to my little corner of the internet!
            I'm a devloper who loves building things with code.
            I'm passionate about creating fun and useful web applications and
            always eager to learn new things.
            <br />
            よろしくお願いします！
          </p>

          <img
            src={MahiroPfp}
            alt="Mahiro pfp"
            className="ml-2 rounded-full w-32 h-32 object-cover border-4 border-dutch-white 
            object-top flex-shrink-0"
          />

        </div>

        <University />

        <hr className="my-16 border-t border-dutch-white" />

        <Development />
        <Projects />

      </div>

      {/* Sidebar (Right) */}
      <div className="hidden md:flex md:flex-col w-80 md:w-96 pt-16 px-16 sticky top-0 h-screen 
        overflow-y-auto">

        <nav>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Contents</h3>
          <ul>
            <li className="mb-2">
              <a href="#university" className="text-xl text-gray-700 hover:text-melon">
                University</a>
            </li>

            <li className="mb-2">
              <a href="#development" className="text-xl text-gray-700 hover:text-melon">
                Development</a>
            </li>
          </ul>
        </nav>

        <div className="flex justify-center items-center space-x-6 mt-auto pb-16">
          <a
            href="https://discordapp.com/users/531174024622112788"
            target="_blank"
            rel="noopener noreferrer"
            title="Discord"
            className="text-gray-600 hover:text-melon transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faDiscord} size="2x" />
          </a>
          <a
            href="https://github.com/brayanMuniz"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="text-gray-600 hover:text-melon transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>

        </div>

      </div>
    </div>
  );
};

export default Home;
