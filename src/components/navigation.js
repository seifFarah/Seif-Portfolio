import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navigation.css';

const Navigation = () => {
  return (
    <Navbar bg="custom-dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand>
        <img
          src="/S.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="section-one" smooth={true} duration={500} offset={-70}>Introduction</Nav.Link>
          <Nav.Link as={Link} to="follow-content" smooth={true} duration={500} offset={-70}>About</Nav.Link>
          <Nav.Link as={Link} to="section-projects" smooth={true} duration={500} offset={-70}>Projects</Nav.Link>
          <Nav.Link as={Link} to="section-two" smooth={true} duration={500} offset={-70}>Experience</Nav.Link>
          <Nav.Link as={Link} to="section-three" smooth={true} duration={500} offset={-70}>Extracurriculars</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
