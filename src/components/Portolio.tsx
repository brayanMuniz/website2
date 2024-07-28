import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faStickyNote } from '@fortawesome/free-solid-svg-icons';


// components 
import Skills from './Skills';
import Projects from './Projects';

const Portfolio: React.FC = () => {

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('brayanMuniz2636@gmail.com').then(() => {
      console.log("Email copied to clipboard"); // Debug point
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
        console.log("Popup hidden"); // Debug point
      }, 2000); // Hide the message after 2 seconds
    }).catch(err => {
      console.error("Failed to copy email: ", err); // Debug point
    });
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen overflow-auto">

      <div className="mt-8 relative mb-12 pt-12 mx-auto max-w-4xl text-primary text-center py-10 shadow-lg rounded-lg shadow-gray-600">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Brayan</h1>
        <h2 className="text-2xl mb-4">Aspiring Software Engineer</h2>
        <p className="text-lg mb-8 mx-auto px-10">
          Senior at the <a href="https://www.utdallas.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">University of Texas at Dallas</a> studying Computer Science. Specializing in web applications using React, Vue, Node.js, and Go. Passionate about solving real-world problems through technology.
        </p>
      </div>

      <Skills />

      <Projects />

      <div className="bg-gray-900 text-gray-100 py-12 flex flex-col md:flex-row justify-center items-center space-x-8">

        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <span className="text-lg font-bold text-white hidden md:inline">Contact:</span>

          <button onClick={copyToClipboard} className="text-blue-400 hover:underline flex items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
            <span className="hidden md:inline">brayanMuniz2636@gmail.com</span>
          </button>

          <a href="https://discordapp.com/users/531174024622112788" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center space-x-2">
            <FontAwesomeIcon icon={faDiscord} size="2xl" />
          </a>
          <a href="https://github.com/brayanMuniz" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center space-x-2">
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
          <a href="https://www.linkedin.com/in/brayan-muniz-4ba407161/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center space-x-2">
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
        </div>

        <div className="flex justify-center">
          <Link to="/notes" className="text-blue-400 hover:underline flex items-center space-x-2">
            <FontAwesomeIcon icon={faStickyNote} size="2xl" />
            <span>University Notes</span>
          </Link>
        </div>

        {isCopied && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg">
            Email copied to clipboard!
          </div>
        )}

      </div>

    </div>
  );
};

export default Portfolio;

