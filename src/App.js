import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navigation';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Projects from './Pages/Project';
// index.js or App.js

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
