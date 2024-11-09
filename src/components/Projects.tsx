import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faVuejs, faGithub, faGolang } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFire } from '@fortawesome/free-solid-svg-icons';

type IconType = 'faJs' | 'faReact' | 'faVuejs' | 'faNodeJs' | 'faGolang' | 'faDatabase' | 'faFire' | 'faGithub';

const iconMap: { [key: string]: any } = {
  faJs,
  faReact,
  faVuejs,
  faGolang,
  faDatabase,
  faFire,
  faGithub
};

interface Project {
  img: string;
  alt: string;
  title: string;
  projectLink: string;
  repoLink: string;
  description: string;
  list: string[];
  icons: IconType[];
  status: 'In Development' | 'Done';
}

const projects: Project[] = [
  {
    img: require("../assets/nihongoSync.png"),
    alt: "A preview of NihongoSync",
    title: "NihongoSync",
    projectLink: "https://nihongosync.netlify.app",
    repoLink: "https://github.com/brayanMuniz/NihongoSync",
    description:
      "A web application to keep track of the reviews you've done in WaniKani by using a Go server with PostgreSQL. The client maps the content you've watched from Learn Natively and maps it to the level in WaniKani.",
    list: ["Typescript", "Go", "PostgreSQL", "React"],
    icons: [
      "faJs", "faGolang", "faDatabase", "faReact"
    ],
    status: 'In Development'
  },

  {
    img: require("../assets/workout-app.png"),
    alt: "A preview of the Workout App",
    title: "Workout App",
    projectLink: "https://strength.netlify.app",
    repoLink: "https://github.com/brayanMuniz/power-app",
    description:
      "A workout app to help people keep track of their current workout and past workouts.",
    list: ["Typescript", "VueJs", "Vuetify", "Firebase"],
    icons: ["faJs", "faVuejs", "faFire"],
    status: 'Done'

  },

  {
    img: require("../assets/maze.png"),
    alt: "A preview of vue-maze-game",
    title: "Vue Maze Game",
    projectLink: "https://vue-maze-game.netlify.app",
    repoLink: "https://github.com/brayanMuniz/vue-maze-game",
    description:
      "A simple maze game played on the browser that can be played by multiple people at once.",
    list: ["Typescript", "VueJs", "Firebase"],
    icons: ["faJs", "faVuejs", "faFire"],
    status: 'Done'
  },

  {
    img: require("../assets/bcaa.png"),
    alt: "A preview of the Chat-App website",
    title: "Chat App",
    projectLink: "https://bcaa.netlify.app/",
    repoLink: "https://github.com/brayanMuniz/chat-app",
    description:
      "Chat-app that can update in real-time. Uses Vue.js and its third-party libraries Vuex and Vue-router, with Firebase, to store all the messages and chat-room images.",
    list: ["CSS", "JavaScript", "VueJs", "Firebase"],
    icons: ["faJs", "faVuejs", "faFire"],
    status: 'Done'
  }
];

function shadowClassHelper(index: number): string {
  switch (index) {
    case 0:
      return 'shadow-md shadow-gray-600';
    case 1:
      return 'shadow-md shadow-gray-600';
    case 2:
      return 'shadow-lg shadow-gray-600';
    case 3:
      return 'shadow-lg shadow-gray-600';
    default:
      return '';
  }
}

const Projects: React.FC = () => {

  return (
    <div className="text-gray-100 p-8">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className={`p-4 rounded-lg flex flex-col md:flex-row ${shadowClassHelper(index)}`}>

            <div className="order-1 md:order-1 md:w-7/12 flex flex-col justify-between">
              <div>

                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-bold mr-2">{project.title}</h3>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>
                </div>
                <p className="text-gray-300 mb-2 text-xl">{project.description}</p>
              </div>
              <div className="flex flex-wrap mt-auto">
                {project.icons.map((icon, i) => (
                  <div key={i} className="m-2 text-center">
                    <FontAwesomeIcon icon={iconMap[icon]} className="text-2xl" />
                  </div>
                ))}
              </div>

            </div>

            <a
              key={index}
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="order-1 md:order-2 w-full md:w-5/12 bg-gray-700 p-1 rounded-lg hover:bg-gray-600 transition duration-300 relative"
            >
              <img src={project.img} alt={project.alt} className="w-full h-80 object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg" />
              <span className={`absolute bottom-2 right-2 text-xs font-bold px-2 py-1 rounded ${project.status === 'Done' ? 'bg-blue-400' : 'bg-yellow-500'}`}>
                {project.status}
              </span>
            </a>

          </div>
        ))}
      </div>

      <div className="mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>

          <h3 className="text-3xl font-bold">Computer Networking </h3>
          <ul className="list-disc pl-4">
            <li className="text-xl">
              <a href="https://github.com/brayanMuniz/Go-TCP" className="">
                Go TCP Client/Server
              </a>
            </li>
          </ul>

        </div>

        <div>
          <h3 className="text-3xl font-bold">Systems Programming</h3>

          <ul className="list-disc pl-4">
            <li className="text-xl">
              <a href="https://github.com/brayanMuniz/Multi-threaded-Hash-Tree" className="">
                Multi-threaded-Hash-Tree
              </a>

            </li>
          </ul>


        </div>


      </div>

    </div>
  );

};

export default Projects;
