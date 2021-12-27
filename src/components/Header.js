import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="text-lora">Gab Garde</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#conservation">Conservation</Nav.Link> */}
            <Nav.Link href="#art">Art</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}