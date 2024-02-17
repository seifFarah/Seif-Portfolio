import React, { useState, useEffect } from 'react';
import './Experience.css';
import Footer from '../components/Footer';


const Experience = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 500); // Delay animation for 500 milliseconds (adjust as needed)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <section className={`experience-section ${isAnimated ? 'active' : ''}`} style={{backgroundImage: "url(uoa.jpg)"}}>
        <div className="experience-content">
          <h2>Teaching Assistant</h2>
          <h3>The University of Auckland</h3>
          <h4>January 2024 - Current</h4>
          <p>
          I am currently fulfilling the role of a Teaching Assistant within the esteemed Information Systems department at our university. In this capacity, I am providing support to students enrolled in both INFOSYS 110 and INFOMGMT 192, assisting in fostering an enriching learning environment across these foundational courses.
          </p>
        </div>
      </section>
      <section className={`experience-section ${isAnimated ? 'active' : ''}`} style={{backgroundImage: "url(thai.jpg)"}}>
        <div className="experience-content">
          <h2>Junior Project Manager</h2>
          <h3>SomTam Labs</h3>
          <h4>November 2023 - January 2024</h4>
          <p>
            As a project manager intern, I worked across multiple projects including project management system migration, website design and testing. Additionally, I worked with senior managers to manage project cost and tracking. I actively collaborated closely with senior project managers to handle a diverse range of projects and tasks while maintaing professional relations with stakeholders.
          </p>
        </div>
      </section>
      <section className={`experience-section ${isAnimated ? 'active' : ''}`} style={{backgroundImage: "url(west.jpg)"}}>
        <div className="experience-content">
          <h2>Gold Class Cinema Attendant</h2>
          <h3>EVT Entertainment</h3>
          <h4>April 2022 - February 2024 </h4>
          <p>
          During my tenure as a Gold Class Cinema attendant, I consistently delivered exceptional customer experiences by providing attentive service and ensuring utmost satisfaction. My responsibilities encompassed serving customers with precision, maintaining adherence to health and safety protocols, and skillfully preparing a diverse range of high-quality beverages and meals, even during periods of high pressure.
          </p>
        </div>
      </section>
      {/* Add more sections as needed */}
      <Footer/>
    </div>
  );
};

export default Experience;
