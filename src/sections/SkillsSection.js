import React from "react";
import "./SkillsSection.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import js from "../images/JS.jpg";
import reactjs from "../images/reactjs.jpg";
import html from "../images/html.png";
import css from "../images/css.png";
import java from "../images/java.jpg";
import python from "../images/python.png";
import nodejs from "../images/nodejs.jpg";
import aws from "../images/aws.png";
import gcp from "../images/gcp.jpg";
import mysql from "../images/mysql.png";
import sql from "../images/oracle.jpg";
import mongo from "../images/mongodb.png";
import agile from "../images/agile.png";
import jira from "../images/jira.png";
import git from "../images/git.png";
import maven from "../images/maven.png";
import spring from "../images/spring.png";
import hibernate from "../images/hibernate.jpeg";

function SkillsSection() {
  return (
    <div className="skills-section" id="skills">
      <p className="h1 bg-info heading">Skills</p>

      <Row className="topRow">
        <Card className="mainCard">
          <Card.Body>
            <Card.Title>Frontend</Card.Title>

            <Container>
              <Row xs="1" sm="2" md="5">
                <Col>
                  <Card.Img className="backend-skills" variant="top" src={js} />
                </Col>
                <Col>
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={reactjs}
                  />
                </Col>
                <Col>
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={html}
                  />
                </Col>
                <Col>
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={css}
                  />
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card className="mainCard">
          <Card.Body>
            <Card.Title>Backend</Card.Title>

            <Container>
              <Row xs="1" sm="2" md="5">
                <Col>
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={java}
                  />
                </Col>
                <Col>
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={spring}
                  />
                </Col>
                <Col>
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={python}
                  />
                </Col>
                <Col>
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={nodejs}
                  />
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card className="mainCard">
          <Card.Body>
            <Card.Title>Cloud</Card.Title>
            <Container>
              <Row xs="1" sm="2" md="5">
                <Col>
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={aws}
                  />
                </Col>
                <Col>
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={gcp}
                  />
                </Col>
              </Row>
            </Container>{" "}
          </Card.Body>
        </Card>
        <Card className="mainCard">
          <Card.Body>
            <Card.Title>Database</Card.Title>

            <Container>
              <Row xs="1" sm="2" md="5">
                <Col>
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={mysql}
                  />
                </Col>
                <Col>
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={sql}
                  />
                </Col>
                <Col>
                  <Card.Img
                    className="backend-skills "
                    variant="top"
                    src={mongo}
                  />
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card className="mainCard">
          <Card.Body>
            <Container>
              <Row xs="1" sm="2" md="6">
                <Col>
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={agile}
                  />
                </Col>
                <Col>
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={jira}
                  />
                </Col>
                <Col>
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={git}
                  />
                </Col>
                <Col>
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={maven}
                  />
                </Col>
                <Col>
                  <Card.Img
                    className="backend-skills"
                    variant="top"
                    src={hibernate}
                  />
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}

export default SkillsSection;
