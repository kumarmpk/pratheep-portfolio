import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import "./NavBarWithLib.css";

class NavBarWithLib extends Component {
  render() {
    return (
      <Navbar
        className="border-bottom navbar-main"
        variant="dark"
        expand="lg"
        fixed="top"
      >
        <Navbar.Brand>Pratheep Kumar Manoharan</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav variant="dark">
            <Link
              activeClass="active"
              className="nav-links"
              to="about-me"
              spy={true}
              smooth={true}
              offset={-70}
              duration={750}
            >
              About Me
            </Link>
            <Link
              activeClass="active"
              to="skills"
              className="nav-links"
              spy={true}
              smooth={true}
              offset={-70}
              duration={750}
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              to="experience"
              className="nav-links"
              spy={true}
              smooth={true}
              offset={-70}
              duration={750}
            >
              Experience
            </Link>
            <Link
              activeClass="active"
              to="projects"
              className="nav-links"
              spy={true}
              smooth={true}
              offset={-70}
              duration={750}
            >
              Projects
            </Link>
            {/* <Link
              activeClass="active"
              to="contact-me"
              className="nav-links"
              spy={true}
              smooth={true}
              offset={-70}
              duration={750}
            >
              Contact Me
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBarWithLib;
