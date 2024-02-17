// Button.js
import React from 'react';
import './Button.css';

const Button = ({ href, children }) => {
  return (
    <a href={href} className="button">
      {children}
    </a>
  );
};

export default Button;
