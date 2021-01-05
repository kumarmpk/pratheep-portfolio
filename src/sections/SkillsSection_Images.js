import React from "react";
import "./SkillsSection.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import js from "./JS.jpg";
import reactjs from "./reactjs.jpg";
import java from "./java.jpg";
import python from "./python.png";
import nodejs from "./nodejs.jpg";
import aws from "./aws.png";
import gcp from "./gcp.jpg";
import agile from "./agile.png";
import jira from "./jira.png";
import spring from "./spring.png";
import oracle from "./oracle.jpg";
import mysql from "./mysql.png";
import mongo from "./mongodb.png";

function SkillsSection(props) {
  return (
    <div className="skills-section" id="skills">
      <h1>Skills</h1>
      <Container>
        <h2>Programming</h2>
        <Row className="ml-1 mr-1 p-1">
          <Col className="sm md-2">
            <Card className="frontend-card">
              <Card.Body>
                <Card.Title>Frontend</Card.Title>
                <Card.Text>
                  <Card.Img className="backend-skills" variant="top" src={js} />
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={reactjs}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="sm md-2">
            <Card className="backend-card">
              <Card.Body>
                <Card.Title>Backend</Card.Title>
                <Card.Text>
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={java}
                  />
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={python}
                  />
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={nodejs}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="sm md-2">
            <Card className="cloud-card">
              <Card.Body>
                <Card.Title>Cloud</Card.Title>
                <Card.Text>
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={aws}
                  />
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={gcp}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="sm md-2">
            <Card className="db-card">
              <Card.Body>
                <Card.Title>Database</Card.Title>
                <Card.Text>
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={oracle}
                  />
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={mysql}
                  />
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={mongo}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h2>Non-Programming</h2>
        <Row className="ml-1 mr-1 p-1">
          <Col className="sm md-2">
            <img src={agile} alt="Agile" />
          </Col>
          <Col className="sm md-2">
            <img src={jira} alt="Jira" />
          </Col>
          <Col className="sm md-2">
            <img src={spring} alt="Spring" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SkillsSection;
