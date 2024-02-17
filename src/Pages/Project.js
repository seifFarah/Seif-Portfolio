import React from 'react';
import './Project.css';
import Footer from '../components/Footer';

const Project = () => {
  return (
    <div>
    <div style={{display:'flex',flexDirection:'column',justifyItems:'center',alignItems:'center'}} className="project-container">
      <h1 style={{color: 'white',margin: 20}}>Extracurriculars</h1>
      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <h2>Design Member</h2>
            <p>Biztech Society</p>
            <p>Joining the executive team with a for digital content creation to promote the club's vision to create a
safe space for students interested in the intersection of business and technology.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2>Events Member</h2>
            <p>Informations Systems and Business Analytics Society</p>
            <p>Contributed to the success of IBSS events by working with the events team to organise and execute upcoming events.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2>EY Ideate and Innovate Challenge</h2>
            <p>EY Head Offfice</p>
            <p>Worked on a two-day technical competition where I was randomly allocated into a group of four university students to
create a technical solution to solve the issue of lack of engagement with university events.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2>Zuru Tech case challenge</h2>
            <p>Zuru office in Auckland</p>
            <p>As part of a dynamic team, I worked within my group to propose digital strategies for Zuru to launch their new upcoming branch Zuru Tech. Recieving third place in the competition.</p>
          </div>
        </div>
      </div>
     
    </div>
     <Footer/>
     </div>
  );
};

export default Project;
