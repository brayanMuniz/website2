import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faReact,
  faGolang,
  faVuejs,
  faJsSquare,
  faCss3Alt,
  faRust,
  faDocker,
  faPython,
} from '@fortawesome/free-brands-svg-icons';
import {
  faLink,
  faDatabase,
  faFire,
  faNetworkWired,
  faGears,
  faCode,
} from '@fortawesome/free-solid-svg-icons';

// --- Icon Mapping ---
const techIconMap: { [key: string]: any } = {
  'React': faReact,
  'TypeScript': faJsSquare,
  'JavaScript': faJsSquare,
  'Go': faGolang,
  'PostgreSQL': faDatabase,
  'Vue.js': faVuejs,
  'Firebase': faFire,
  'CSS': faCss3Alt,
  'Rust': faRust,
  'Networking': faNetworkWired,
  'C': faCode,
  'Systems Programming': faGears,
  'Concurrency': faGears,
  'Python': faPython,
  'Docker': faDocker,
};


// --- Project Data ---
interface Project {
  id: string;
  title: string;
  projectLink?: string;
  repoLink: string;
  description: string;
  techStack: string[];
}

const fullStackProjects: Project[] = [
  {
    id: 'firebird',
    title: "Firebird - Senior Project",
    projectLink: "https://firebird-ivory.vercel.app/",
    repoLink: "https://github.com/orgs/UTD-Senior-Design-Project-Process/repositories",
    description:
      "Monitors the Bluesky social platform in near real-time using its API to detect potential natural disasters (wildfires, earthquakes, etc.) based on public discourse. Analyzes skeet volume, sentiment velocity (via ML), and geographic clustering to identify anomalies. Visualizes potential incidents and sentiment trends as an early situational awareness tool.",
    techStack: ["React", "TypeScript", "Go", "PostgreSQL", "Docker", "Python"],
  },
  {
    id: 'workout-app',
    title: "Workout App",
    projectLink: "https://strength.netlify.app",
    repoLink: "https://github.com/brayanMuniz/power-app",
    description:
      "A workout app to help people keep track of their current workout and past workouts.",
    techStack: ["TypeScript", "Vue.js", "Firebase"],
  },
  {
    id: 'vue-maze-game',
    title: "Vue Maze Game",
    projectLink: "https://vue-maze-game.netlify.app",
    repoLink: "https://github.com/brayanMuniz/vue-maze-game",
    description:
      "A simple maze game played on the browser that can be played by multiple people at once.",
    techStack: ["TypeScript", "Vue.js", "Firebase"],
  },
  {
    id: 'chat-app',
    title: "Chat App",
    projectLink: "https://bcaa.netlify.app/",
    repoLink: "https://github.com/brayanMuniz/chat-app",
    description:
      "Real-time chat application using Vue.js, Vuex, Vue-router, and Firebase for storage.",
    techStack: ["CSS", "JavaScript", "Vue.js", "Firebase"],
  },
];

const systemsNetworkingProjects: Project[] = [
  {
    id: 'rust-tcp',
    title: "Rust TCP Client/Server",
    repoLink: "https://github.com/brayanMuniz/rust-tcp",
    description:
      "A simple TCP client and server implementation written in Rust, demonstrating basic networking concepts.",
    techStack: ["Rust", "Networking"],
  },
  {
    id: 'go-tcp',
    title: "Go TCP Client/Server",
    repoLink: "https://github.com/brayanMuniz/Go-TCP",
    description:
      "A simple TCP client and server implementation written in Go, demonstrating basic networking concepts.",
    techStack: ["Go", "Networking"],
  },
  {
    id: 'hash-tree',
    title: "Multi-threaded Hash Tree",
    repoLink: "https://github.com/brayanMuniz/Multi-threaded-Hash-Tree",
    description:
      "A C program implementing a multi-threaded hash tree, exploring concepts in systems programming and concurrency.",
    techStack: ["C", "Systems Programming"],
  },
];


// --- Project Card Component ---
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-misty-rose flex flex-col h-full">
    <div className="flex justify-between items-start mb-3">
      <h4 className="text-xl font-semibold text-gray-800">{project.title}</h4>
      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" title="GitHub Repository" className="text-gray-500 hover:text-melon transition-colors duration-200 ml-4 flex-shrink-0">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
    </div>
    <p className="text-base text-gray-600 mb-4 leading-relaxed flex-grow">{project.description}</p>
    <div className="mt-auto pt-4">
      {project.projectLink && (
        <div className="mb-4">
          <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-melon hover:underline font-medium">
            <FontAwesomeIcon icon={faLink} className="mr-2" />
            Live Demo
          </a>
        </div>
      )}
      <div className="flex flex-wrap gap-4">
        {project.techStack.map((tech) => {
          const icon = techIconMap[tech] || faCode;
          return (
            <div key={tech} className="group relative">
              <FontAwesomeIcon
                icon={icon}
                size="lg"
                className="text-gray-500 group-hover:text-melon transition-colors duration-200"
              />
            </div>
          );
        })}
      </div>
    </div>
  </div>
);


const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-16 scroll-mt-16">
      <h2 className="text-3xl font-bold text-orchid-pink mb-8">Projects</h2>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Full-Stack Applications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fullStackProjects.map((project, index) => (
            <React.Fragment key={project.id}>
              <div className={project.id === 'firebird' ? 'md:col-span-2' : ''}>
                <ProjectCard project={project} />
              </div>
              {project.id === 'firebird' && (
                <div className="md:col-span-2 text-center my-8">
                  <div className="relative flex items-center">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-4 text-gray-500 text-sm italic">
                      The Full-stack projects below this line were made before the era of LLMs
                    </span>
                    <div className="flex-grow border-t border-gray-300"></div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Networking & Systems Programming</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {systemsNetworkingProjects.map((project, index) => (
            <div key={project.id} className={index === 0 ? 'md:col-span-2' : ''}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
