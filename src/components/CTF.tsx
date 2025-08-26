// src/components/CTF.tsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Define a type for our challenge structure
interface Challenge {
  slug: string;
  title: string;
}

// Define a type for our manifest structure (keys are platform names)
interface Manifest {
  [platform: string]: Challenge[];
}

const CTF: React.FC = () => {
  // State to hold the manifest data and loading status
  const [manifest, setManifest] = useState<Manifest>({});
  const [loading, setLoading] = useState<boolean>(true);

  // This effect runs once when the component is first rendered
  useEffect(() => {
    // Fetch the manifest file from the public folder
    fetch('/content.json')
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => {
        setManifest(data); // Store the data in our state
        setLoading(false); // Mark loading as complete
      })
      .catch((error) => {
        console.error("Failed to load content manifest:", error);
        setLoading(false); // Also stop loading on error
      });
  }, []); // The empty array [] ensures this effect runs only once

  // Show a loading message while fetching data
  if (loading) {
    return <div className="text-center mt-16">Loading writeups...</div>;
  }

  // Get the list of platforms (e.g., ['picoctf', 'hackthebox'])
  const platforms = Object.keys(manifest);

  return (
    <div className="px-4 sm:px-4 md:px-12 lg:px-40 pt-16 pb-16">
      <h1 className="text-4xl font-bold text-melon mb-4">CTF Writeups</h1>

      {platforms.length === 0 && !loading ? (
        <p className="text-lg text-gray-500 mt-8">No writeups found. Run the manifest script to generate the list.</p>
      ) : (
        // Map over each platform and render its section
        platforms.map((platform) => (
          <div key={platform}>
            <hr className="my-8 border-t border-dutch-white" />
            <h2 className="text-4xl text-orchid-pink font-bold mb-4 capitalize">{platform.replace('picoctf', 'picoCTF')}</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              {/* Map over the challenges for the current platform */}
              {manifest[platform].map((challenge) => (
                <li key={challenge.slug}>
                  <Link
                    to={`/ctf/${platform}/${challenge.slug}`}
                    className="text-melon hover:underline"
                  >
                    {challenge.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default CTF;
