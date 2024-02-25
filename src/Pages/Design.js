// Design.js

import React from 'react';
import './Design.css';

const Design = () => {
  return (
    <div className="design-container">
        <h1 style={{color: 'white',margin: 20}}>Designs</h1>
        <div className="design-grid">

        <div className="design-item">
          <img src="/landing.png" alt="Landing UI" />
          <p>Landing UI</p>
        </div>
        <div className="design-item">
          <img src="/merch.png" alt="Merch UI" />
          <p>Merch UI</p>
        </div>
        <div className="design-item">
          <img src="/tour.png" alt="Tour UI" />
          <p>Tour UI</p>
        </div>
        <div className="design-item">
          <img src="/parfum.png" alt="Parfum UI" />
          <p>Parfum UI</p>
        </div>
        
      </div>
    </div>
  );
};

export default Design;
