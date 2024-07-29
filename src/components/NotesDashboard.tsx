import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const subjects = [
  {
    id: 'MachineLearning',
    name: 'Machine Learning',
    image: require("../assets/robot.jpg"),
    resources: [
      { type: 'Website', name: 'https://see.stanford.edu/Course/CS229' },
    ],
  },

  {
    id: 'DatabaseSystems',
    name: 'Database Systems',
    image: require("../assets/hardDrive.jpg"),
    resources: [
    ],
  },

  {
    id: 'OperatingSystems',
    name: 'Operating Systems Concepts',
    image: require("../assets/ubuntu.jpg"),
    resources: [
    ],
  },

  {
    id: 'Algorithms',
    name: 'Algorithms',
    image: require("../assets/cubes.jpg"),
    resources: [
      { type: 'Textbook', name: "https://jeffe.cs.illinois.edu/teaching/algorithms/" }
    ],
  },

  {
    id: 'ProgrammingParadigms',
    name: 'Programming Language Paradigms',
    image: require("../assets/coding.jpg"),
    resources: [
    ],
  },

  {
    id: 'ComputerNetworks',
    name: 'Computer Networks',
    image: require("../assets/bigData.jpg"),
    resources: [
    ],
  },

];

const NotesDashboard: React.FC = () => {


  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);

  const toggleDetails = (subjectId: string) => {
    setExpandedSubject(expandedSubject === subjectId ? null : subjectId);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map(subject => (
            <div key={subject.id} className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-gray-800">

              <Link to={`/notes/${subject.id}`}>
                <img src={subject.image} alt={subject.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
              </Link>

              <div className='flex flex-row mb-2 p-4'>
                <h2 className="text-xl font-bold">{subject.name}</h2>
                <button onClick={() => toggleDetails(subject.id)} className="ml-4 text-blue-500 hover:underline flex items-center">
                  {expandedSubject === subject.id ? (
                    <FontAwesomeIcon icon={faChevronUp} className="mr-2" />
                  ) : (
                    <FontAwesomeIcon icon={faChevronDown} className="mr-2" />
                  )}
                </button>
              </div>



              {expandedSubject === subject.id && (
                <div className="mt-4">
                  <ul className="list-disc list-inside">
                    {subject.resources.map((resource, index) => (
                      <li key={index}>
                        {resource.type}: {resource.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

};

export default NotesDashboard;

