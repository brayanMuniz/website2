import React from 'react';
import MahiroPfp from '../assets/mahiro.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home: React.FC = () => {
  return (
    <div className="flex">
      {/* Main Content Area (Left) */}
      <div className="flex-grow p-48">
        <h1 className="text-4xl font-bold text-melon mb-4">Hello! I'm Brayan! 👋</h1>
        <div className='flex'>

          <p className="text-xl text-gray-700 mb-8 max-w-prose">
            Welcome to my little corner of the internet! I'm a Computer Science student who loves building things with code.
            I'm passionate about creating fun and useful web applications and always eager to learn new things.
            よろしくお願いします！
          </p>


          <div className="flex flex-col items-center flex-shrink-0">

            <img
              src={MahiroPfp}
              alt="Mahiro pfp"
              className="ml-2 rounded-full w-32 h-32 object-cover border-4 border-dutch-white object-top"
            />

            <div className="flex items-center space-x-4 mt-4">
              <a
                href="https://discordapp.com/users/531174024622112788"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-melon transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faDiscord} size="2x" />
              </a>
              <a
                href="https://github.com/brayanMuniz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-melon transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>

          </div>

        </div>

        <section id="development" className="mb-16 scroll-mt-16">
          <h2 className="text-3xl font-bold text-orchid-pink mb-4">Development</h2>
          <p className="text-lg text-gray-600">
            Studying Computer Science at UT Dallas... My favorite tools include... Link to LeetCode/Notes...
          </p>
        </section>

      </div>

      {/* Sidebar (Right) */}
      <div className="w-96 p-6 sticky top-0 h-screen overflow-y-auto">
        <div className="flex flex-col items-center mb-6">
        </div>

        <nav>
          <h3 className="text-xl font-bold mb-4 text-gray-800">Contents</h3>
          <ul>
            <li className="mb-2">
              <a href="#development" className="text-gray-700 hover:text-melon">
                Development</a>
            </li>

            <li className="mb-2">
              <a href="#skills" className="text-gray-700 hover:text-gray-900">Skills</a>
            </li>

            <li className="mb-2">
              <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
            </li>

            <li className="mb-2">
              <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </li>

          </ul>
        </nav>

      </div>
    </div>
  );
};

export default Home;
