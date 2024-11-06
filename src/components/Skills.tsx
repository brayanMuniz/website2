import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faVuejs, faNodeJs, faPython, faJava, faGolang } from '@fortawesome/free-brands-svg-icons';
import { faC, faCode, faCodePullRequest, faDatabase, faFire, faTerminal } from '@fortawesome/free-solid-svg-icons';

const Skills: React.FC = () => {
  return (
    <div className="text-center text-white bg-gray-800 p-8">
      <h1 className="text-4xl mb-6">Skills & Technologies</h1>

      <div className="flex flex-wrap justify-center mb-8">
        <div className="m-4 text-center">
          <FontAwesomeIcon icon={faJs} size="3x" />
          <span className="block mt-2">JavaScript</span>
        </div>
        <div className="m-4 text-center">
          <FontAwesomeIcon icon={faGolang} size="3x" />
          <span className="block mt-2">Go</span>
        </div>
        <div className="m-4 text-center">
          <FontAwesomeIcon icon={faPython} size="3x" />
          <span className="block mt-2">Python</span>
        </div>
        <div className="m-4 text-center">
          <FontAwesomeIcon icon={faJava} size="3x" />
          <span className="block mt-2">Java</span>
        </div>
        <div className="m-4 text-center">
          <FontAwesomeIcon icon={faC} size="3x" />
          <span className="block mt-2">C</span>
        </div>

      </div>

      <div className="flex flex-wrap justify-center">
        <div className="m-4 text-center">
          <FontAwesomeIcon icon={faVuejs} size="3x" />
          <span className="block mt-2">Vue</span>
        </div>

        <div className="m-4 text-center">
          <FontAwesomeIcon icon={faReact} size="3x" />
          <span className="block mt-2">React</span>
        </div>
        <div className="m-4 text-center">
          <FontAwesomeIcon icon={faNodeJs} size="3x" />
          <span className="block mt-2">Node</span>
        </div>
        <div className="m-4 text-center">
          <FontAwesomeIcon icon={faCodePullRequest} size="3x" />
          <span className="block mt-2">Git</span>
        </div>
        <div className="m-4 text-center">
          <FontAwesomeIcon icon={faDatabase} size="3x" />
          <span className="block mt-2">PostgreSQL</span>
        </div>
        <div className="m-4 text-center">
          <FontAwesomeIcon icon={faFire} size="3x" />
          <span className="block mt-2">Firebase</span>
        </div>
        <div className="m-4 text-center">
          <FontAwesomeIcon icon={faTerminal} size="3x" />
          <span className="block mt-2">Neovim</span>
        </div>
        <div className="m-4 text-center">
          <FontAwesomeIcon icon={faCode} size="3x" />
          <span className="block mt-2">VS Code</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;

