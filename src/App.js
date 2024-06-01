import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Project from './Pages/Project';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/beyonce-store" element={<Project />} />

      </Routes>
    </Router>
  );
};

export default App;
