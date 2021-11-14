import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand href="#home">Gab Garde</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}