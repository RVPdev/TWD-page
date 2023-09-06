import React from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Navbar.css";

function NavBar() {
  // NavBar element
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Row className="justify-content">
          <Col>
            <Navbar.Brand href="/">TWD</Navbar.Brand>
          </Col>
          <Col >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;
