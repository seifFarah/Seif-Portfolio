// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>© 2024 Seifeldin Farah</p>
        <p>Made in React</p>
        <a href="https://www.linkedin.com/in/seifeldin-farah" target="_blank" rel="noopener noreferrer">
        <img src="/linkedin.png" alt="LinkedIn" className='linkedin-icon'></img>
        </a>

      </div>
    </footer>
  );
};

export default Footer;
