import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './components/Portolio';
import NotePage from './components/NotePage';
import './App.css'
import './css/markdown.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Portfolio />,
  },
  {
    path: '/notes/:page',
    element: <NotePage />,
  },
]);

const App: React.FC = () => {
  return (
    <div className="App bg-gray-900 text-gray-100 min-h-screen">

      <RouterProvider router={router} />
    </div>
  );
};

export default App;

