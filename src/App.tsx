import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
