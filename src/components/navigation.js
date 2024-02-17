import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navigation.css'; // Import your custom CSS file for additional styling

const Navigation = () => {
  return (
    <Navbar bg="custom-dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
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
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
          <Nav.Link as={Link} to="/projects">Extracurriculars</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
