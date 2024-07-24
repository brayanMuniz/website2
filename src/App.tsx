import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portolio';
import NotePage from './components/NotePage';
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/notes/:page" element={<NotePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

