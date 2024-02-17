import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import Button from '../components/Button';
import Footer from '../components/Footer';

const About = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const words = "Hello, my name is Seif 👋";
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(words.substring(0, index));
      setIndex((prevIndex) => prevIndex + 1);
    }, 100); // Adjust typing speed (milliseconds)

    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <div className="about">
      <Container> 
        <Row>
          <Col className="text-center"> {/* Center the column */}
            <img src="childhood.jpg" alt="Seifeldin Farah" className="profile-image" />
          </Col>
        </Row>
        <Row>
          <Col>
            <section id="section1" className="section">
              <h1>{text}</h1>
              <p>
              As I approach the culmination of my journey at the University of Auckland, pursuing a Bachelor of Science in IT Management, I am fueled by a profound enthusiasm for problem-solving. Whether through innovative technical solutions or creative approaches, I am dedicated to driving tangible results. As I prepare to transition into the workforce upon completing my final year, I eagerly anticipate the opportunity to apply the skills honed through both my academic pursuits and previous professional experiences.
              </p>
            </section>
          </Col>
        </Row>
        <Row>
          <Col>
            <section id="section3" className="section">
              <h2>My hobbies</h2>
              <p>
                I love a good story! I'm always active on my letterboxd and Spotify, so feel free to add me if you want to stay connected.
              </p>
              <Button href="https://boxd.it/7aldJ">Letterboxd</Button>
              <Button href="https://open.spotify.com/user/dzf6h436b1ec61qth6oleuid1?si=895f9d176e68460f">Spotify</Button>

            </section>
          </Col>
        </Row>
      </Container> 
      <Footer />
    </div>
  );
};

export default About;
