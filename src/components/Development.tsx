import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faApple,
  faDocker,
  faGolang,
  faRust,
  faJsSquare
} from '@fortawesome/free-brands-svg-icons';

const Development: React.FC = () => {
  return (
    <section id="development" className="mb-16 scroll-mt-16">
      <h2 className="text-3xl font-bold text-orchid-pink mb-6">Development</h2>

      <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 mb-8">
        <div className="w-full md:w-2/3">
          <p className="text-lg text-gray-700 leading-relaxed">
            My primary focus is building full-stack applications, typically using React with TypeScript for the frontend
            and Go for the backend.
            <br />
            I also have a strong curiosity for systems programming and cybersecurity,
            areas where I enjoy exploring the capabilities of Rust.
          </p>
        </div>

        <div className="w-full md:w-1/3">
          <div className="space-y-3 mb-4">

            <div className="flex items-center space-x-3">
              <span className="w-20 text-lg text-gray-700 font-medium">OS:</span>
              <FontAwesomeIcon icon={faApple} size="lg" className="text-gray-600" />
            </div>

            <div className="flex items-center space-x-3">
              <span className="w-20 text-lg text-gray-700 font-medium">Editor:</span>
              <span className="font-mono text-gray-600 text-lg">Neovim</span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="w-20 text-lg text-gray-700 font-medium">Terminal:</span>
              <span className="font-mono text-gray-600 text-lg">Ghostty</span>
            </div>
          </div>

          <div className="flex items-center space-x-4"> {/* Spacing between icons */}

            <div className="group relative">
              <FontAwesomeIcon icon={faGolang} size="2x"
                className="text-gray-600 group-hover:text-melon transition-colors duration-200" />
            </div>

            <div className="group relative">
              <FontAwesomeIcon icon={faJsSquare} size="2x"
                className="text-gray-600 group-hover:text-melon transition-colors duration-200" />
            </div>

            <div className="group relative">
              <FontAwesomeIcon icon={faRust} size="2x"
                className="text-gray-600 group-hover:text-melon transition-colors duration-200" />
            </div>

            <div className="group relative">
              <FontAwesomeIcon icon={faDocker} size="2x"
                className="text-gray-600 group-hover:text-melon transition-colors duration-200" />
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Development;
