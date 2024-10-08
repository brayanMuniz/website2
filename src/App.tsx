import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
import './css/markdown.css';

import Portfolio from './components/Portolio';
import NotePage from './components/NotePage';
import NotesDashboard from './components/NotesDashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Portfolio />,
  },
  {
    path: '/notes',
    element: <NotesDashboard />,
  },
  {
    path: '/notes/:page',
    element: <NotePage />,
  },
  {
    path: '*',
    element: <Portfolio />, // Fallback to Portfolio for undefined routes
  },
]);

const App: React.FC = () => {
  return (
    <div className="App bg-gray-900 text-gray-100 min-h-screen" data-theme="dark">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

