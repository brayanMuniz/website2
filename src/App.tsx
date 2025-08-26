import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
import Home from './components/Home';
import CTF from './components/CTF'
import CTFPost from './components/CTFPost'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/ctf',
    element: <CTF />,
  },
  {
    path: '/ctf/:platform/:slug',
    element: <CTFPost />,
  },
  {
    path: '*',
    element: <Home />,
  },
]);

const App: React.FC = () => {
  return (
    <div className="App text-gray-800 min-h-screen" data-theme="light">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
