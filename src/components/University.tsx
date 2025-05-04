import React from 'react';

const University: React.FC = () => {
  return (

    <section id="university" className="mb-16 scroll-mt-16">
      <h2 className="text-3xl font-bold text-orchid-pink mb-4">University </h2>

      <div className="mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          I graduated from the{" "}
          <a href="https://www.utdallas.edu/" target="_blank" rel="noopener noreferrer"
            className="text-melon font-semibold hover:underline">
            University of Texas at Dallas
          </a> {" "}
          in May 2025 with a Bachelor of Science in Computer Science.
          My studies provided a strong foundation in software development, algorithms, and systems,
          and I particularly enjoyed courses that involved hands-on application and problem-solving.
        </p>
      </div>

      {/* Favorite Courses */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Favorite Courses</h3>
        <div className="space-y-6"> {/* Add spacing between course descriptions */}
          {/* Course 1: Systems Programming */}
          <div>
            <h4 className="text-xl font-medium text-gray-700">Systems Programming in UNIX</h4>
            <p className="text-base text-gray-600 mt-1 leading-snug">
              Covered UNIX concepts, file systems, process/thread management, shell scripting,
              basic networking (sockets, client-server), IPC (pipes, signals), version control,
              and cloud computing intro. Included a comprehensive project.
            </p>
          </div>

          {/* Course 2: Computer Networks */}
          <div>
            <h4 className="text-xl font-medium text-gray-700">Computer Networks</h4>
            <p className="text-base text-gray-600 mt-1 leading-snug">
              Focused on the design and analysis of computer networks, including the ISO model,
              transmission media, medium-access protocols, LANs, data link protocols, routing,
              congestion control, internetworking, and connection management.
            </p>
          </div>

          {/* Course 3: Networking Lab */}
          <div>
            <h4 className="text-xl font-medium text-gray-700">Networking Laboratory</h4>
            <p className="text-base text-gray-600 mt-1 leading-snug">
              A hands-on lab course applying basic networking concepts. Involved setting up network topologies,
              configuring devices, running protocols, and using debugging tools to fix common problems.
            </p>
          </div>

          {/* Course 4: Cyber Attack/Defense Lab */}
          <div>
            <h4 className="text-xl font-medium text-gray-700">Cyber Attack and Defense Laboratory</h4>
            <p className="text-base text-gray-600 mt-1 leading-snug">
              Learned offensive techniques and defenses. Covered binary reversing and pwning (stack overflow, heap exploits),
              vulnerability analysis, exploit development, patching, and bug hunting through hands-on CTF-style labs.
            </p>
          </div>

          {/* Course 5: Intro to Machine Learning */}
          <div>
            <h4 className="text-xl font-medium text-gray-700">Introduction to Machine Learning</h4>
            <p className="text-base text-gray-600 mt-1 leading-snug">
              Explored algorithms for programs that learn from experience. Topics included decision trees, neural nets,
              Bayesian learning, SVMs, HMMs, clustering, and various supervised/unsupervised techniques.
            </p>
          </div>
        </div>

      </div>

    </section>


  );
};

export default University;
