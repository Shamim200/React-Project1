import React from "react";

import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";

import { Container, Navbar, Nav } from "react-bootstrap";

import logo from "../assets/images/logo.png";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";

function Navigation() {
  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" style={{ width: "32px" }} />{" "}
            <span>Portfolio</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ml-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/service">
                Service
              </Nav.Link>

              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
