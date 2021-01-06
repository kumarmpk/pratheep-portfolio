import React, { Component } from "react";
import "./AboutMeSection.css";
import mypic from "./my pic.jpg";
import { Row, Container, Col } from "react-bootstrap";
import linkedin from "./linkedin.png";
import github from "./github.png";
// import outlook from "./Outlook.jpg";

class AboutMeSection extends Component {
  state = {
    intro1: "| Goal oriented, dedicated, keen to learn person.",
    intro2:
      "I am an Applied Computer Science graduate student at Dalhousie University, Halifax, Canada. Currently, I am looking for a Summer Internship 2021 or Full time employment. You can find more about me in this website. Please feel free to explore.",
  };

  render() {
    return (
      <div className="about-me-section" id="about-me">
        <p className="h1 bg-info heading">About</p>
        <Container className="content">
          <Row className="justify-content-md-center">
            <Col className="text-center">
              <img
                className="mypic"
                variant="top"
                src={mypic}
                alt="Pratheep Kumar Manoharan"
              />
              <p className="paragraph h4">{this.state.intro1}</p>
              <p className="paragraph h6">{this.state.intro2}</p>
              <a
                href="https://www.linkedin.com/in/pratheepkumarmpk/"
                target="_blank"
                className="links"
                rel="noreferrer"
              >
                <img
                  className="social"
                  variant="top"
                  alt="linked in"
                  src={linkedin}
                />
              </a>
              <a
                href="https://github.com/kumarmpk"
                className="links"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="social"
                  variant="top"
                  alt="GitHub"
                  src={github}
                />
              </a>
              {/* <a href="#contact-me" className="links">
                <img
                  className="social"
                  variant="top"
                  src={outlook}
                  alt="Contact Me"
                />
              </a> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutMeSection;
