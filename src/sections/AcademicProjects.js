import { Row, Col } from "react-bootstrap";
import { Asterisk, Github } from "./Icons";
import "./AcademicProjects.css";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

function AcademicProjects() {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);
  const [isFlipped6, setIsFlipped6] = useState(false);
  const [isFlipped7, setIsFlipped7] = useState(false);
  const [isFlipped8, setIsFlipped8] = useState(false);
  const [isFlipped9, setIsFlipped9] = useState(false);

  return (
    <div>
      <Row xs="1" sm="1" md="2" className="topRow">
        <Col>
          <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
            <div
              className="CardFront bg-white"
              style={{
                background: "#fff",
                padding: "1rem",
                borderRadius: "0.6em",
                margin: "1em",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow:
                  "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)",
                transition: "all ease 200ms",
              }}
            >
              <Row>
                <Col sm={8}>
                  <p className="h4 projectHeading">
                    <i>A Simple RDBMS application (Group Project)</i>
                  </p>
                </Col>
                <Col>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      paddingTop: "0.4rem",
                    }}
                  >
                    Sep 2020 - Dec 2020
                  </p>
                </Col>
              </Row>
              <p>
                <b>Goal:</b> To create a simple data base management system
                (DBMS).
              </p>
              <b>Technologies:</b> Java, Spring boot, JSON, HTML, Thymeleaf
              <p className="buttonParagraph">
                <button
                  className="readMore"
                  onClick={() => setIsFlipped1((prev) => !prev)}
                >
                  Read More
                </button>
              </p>
            </div>
            <div
              className="CardBack bg-white"
              style={{
                paddingLeft: "1rem",
                paddingTop: "1rem",
                background: "#fff",
                borderRadius: "0.6em",
                margin: "1em",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow:
                  "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)",
                transition: "all ease 200ms",
              }}
            >
              <Row>
                <Col sm={1} className="gitIcon">
                  <a
                    style={{ display: "table-cell" }}
                    href="https://github.com/kumarmpk/csci5408_project"
                    target="_blank"
                    className="anchorTag"
                    rel="noreferrer"
                  >
                    <Github />
                  </a>
                </Col>
                <Col sm={10}>
                  <p>
                    <Asterisk />
                    Read, parse, and execute DML, DDL, DQL queries.
                  </p>
                  <p>
                    <Asterisk />
                    Store, retrieve, update, and delete data.
                  </p>
                  <p>
                    <Asterisk />
                    Export data dump from database.
                  </p>
                  <p>
                    <Asterisk />
                    Create ERD of the database.
                  </p>
                </Col>
              </Row>
              <p className="buttonParagraph">
                <button
                  className="backButton"
                  onClick={() => setIsFlipped1((prev) => !prev)}
                >
                  Read Less
                </button>
              </p>
            </div>
          </ReactCardFlip>
        </Col>
        <Col>
          <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
            <div
              className="CardFront bg-white"
              style={{
                background: "#fff",
                padding: "1rem",
                borderRadius: "0.6em",
                margin: "1em",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow:
                  "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)",
                transition: "all ease 200ms",
              }}
            >
              <Row>
                <Col sm={8}>
                  <p className="h4 projectHeading">
                    <i>NHL(Ice Hockey) game simulation (Group Project)</i>
                  </p>
                </Col>
                <Col>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      paddingTop: "0.4rem",
                    }}
                  >
                    Sep 2020 - Dec 2020
                  </p>
                </Col>
              </Row>
              <p>
                <b>Goal:</b> To write clean code in test driven development as
                per industrial standards using Agile methodology.
              </p>
              <b>Technologies:</b> Java with TDD approach (Test Driven
              Development), Agile, Maven, MYSQL, JSON, GitLab, JIRA
              <p className="buttonParagraph">
                <button
                  className="readMore"
                  onClick={() => setIsFlipped2((prev) => !prev)}
                >
                  Read More
                </button>
              </p>
            </div>
            <div
              className="CardBack bg-white"
              style={{
                paddingLeft: "1rem",
                paddingTop: "1rem",
                background: "#fff",
                borderRadius: "0.6em",
                margin: "1em",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow:
                  "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)",
                transition: "all ease 200ms",
              }}
            >
              <Row>
                <Col sm={1} className="gitIcon">
                  <a
                    style={{ display: "table-cell" }}
                    href="https://github.com/kumarmpk/csci5308_project"
                    target="_blank"
                    className="anchorTag"
                    rel="noreferrer"
                  >
                    <Github />
                  </a>
                </Col>
                <Col>
                  <p>
                    <Asterisk />A backend Java application for the NHL game
                    simulation. I implemented the creational pattern, and
                    trading algorithm of the application.
                  </p>
                  <p>
                    <Asterisk />
                    Trading algorithm was built considering general manager
                    personality, player age, player relative strength, and draft
                    picks.
                  </p>
                </Col>
              </Row>
              <p className="buttonParagraph">
                <button
                  className="backButton"
                  onClick={() => setIsFlipped2((prev) => !prev)}
                >
                  Read Less
                </button>
              </p>
            </div>
          </ReactCardFlip>
        </Col>
      </Row>
      <Row xs="1" sm="1" md="2" className="topRow">
        <Col>
          <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
            <div
              className="CardFront bg-white"
              style={{
                background: "#fff",
                padding: "1rem",
                borderRadius: "0.6em",
                margin: "1em",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow:
                  "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)",
                transition: "all ease 200ms",
              }}
            >
              <Row>
                <Col sm={8}>
                  <p className="h4 projectHeading">
                    <i>Letsplay-An Android application</i>
                  </p>
                </Col>
                <Col>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      paddingTop: "0.4rem",
                    }}
                  >
                    Sep 2020 - Dec 2020
                  </p>
                </Col>
              </Row>
              <p>
                <b>Goal:</b> To create a simple android application.
              </p>
              <b>Technologies:</b> Kotlin, GCP Cloud Firestore.
              <p className="buttonParagraph">
                <button
                  className="readMore"
                  onClick={() => setIsFlipped3((prev) => !prev)}
                >
                  Read More
                </button>
              </p>
            </div>
            <div
              className="CardBack bg-white"
              style={{
                paddingLeft: "1rem",
                paddingTop: "1rem",
                background: "#fff",
                borderRadius: "0.6em",
                margin: "1em",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow:
                  "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)",
                transition: "all ease 200ms",
              }}
            >
              <Row>
                <Col sm={1} className="gitIcon">
                  <a
                    style={{ display: "table-cell" }}
                    href="https://github.com/kumarmpk/letsplay"
                    target="_blank"
                    className="anchorTag"
                    rel="noreferrer"
                  >
                    <Github />
                  </a>
                </Col>
                <Col>
                  <p>
                    <Asterisk />A simple android application that connects
                    people of similar interest.
                  </p>
                  <p>
                    <Asterisk />
                    The application allows users to create a sporting event, and
                    update a sporting event.
                  </p>
                  <p>
                    <Asterisk />
                    The event creation action will be notified to other users.
                    The users can join, reject, or ignore event.
                  </p>
                </Col>
              </Row>
              <p className="buttonParagraph">
                <button
                  className="backButton"
                  onClick={() => setIsFlipped3((prev) => !prev)}
                >
                  Read Less
                </button>
              </p>
            </div>
          </ReactCardFlip>
        </Col>
        <Col>
          <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">
            <div
              className="CardFront bg-white"
              style={{
                background: "#fff",
                padding: "1rem",
                borderRadius: "0.6em",
                margin: "1em",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow:
                  "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)",
                transition: "all ease 200ms",
              }}
            >
              <Row>
                <Col sm={8}>
                  <p className="h4 projectHeading">
                    <i>Learning Management System (Group Project)</i>
                  </p>
                </Col>
                <Col>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      paddingTop: "0.4rem",
                    }}
                  >
                    May 2020 - Aug 2020
                  </p>
                </Col>
              </Row>
              <p>
                <b>Goal:</b> To create a serverless application.
              </p>
              <b>Technologies:</b> ReactJS, GCP Cloud Functions, AWS Lambda
              Functions, GCP Pub/Sub, GCP Cloud Storage
              <p className="buttonParagraph">
                <button
                  className="readMore"
                  onClick={() => setIsFlipped4((prev) => !prev)}
                >
                  Read More
                </button>
              </p>
            </div>
            <div
              className="CardBack bg-white"
              style={{
                paddingLeft: "1rem",
                paddingTop: "1rem",
                background: "#fff",
                borderRadius: "0.6em",
                margin: "1em",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow:
                  "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)",
                transition: "all ease 200ms",
              }}
            >
              <Row>
                <Col sm={1} className="gitIcon">
                  <a
                    style={{ display: "table-cell" }}
                    href="https://github.com/kumarmpk/serverless_project"
                    target="_blank"
                    className="anchorTag"
                    rel="noreferrer"
                  >
                    <Github />
                  </a>
                </Col>
                <Col>
                  <p>
                    <Asterisk />A serverless application was developed with
                    register, login, real time chat, chat bot, and sentiment
                    analysis features, using AWS and GCP cloud services.
                  </p>
                  <p>
                    <Asterisk />I implemented the frontend using ReactJS and
                    real time chat using google pub/sub as per requirement.
                  </p>
                </Col>
              </Row>
              <p className="buttonParagraph">
                <button
                  className="backButton"
                  onClick={() => setIsFlipped4((prev) => !prev)}
                >
                  Read Less
                </button>
              </p>
            </div>
          </ReactCardFlip>
        </Col>
      </Row>
      <Row xs="1" sm="1" md="2" className="topRow">
        <Col>
          <ReactCardFlip isFlipped={isFlipped5} flipDirection="horizontal">
            <div
              className="CardFront bg-white"
              style={{
                background: "#fff",
                padding: "1rem",
                borderRadius: "0.6em",
                margin: "1em",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow:
                  "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)",
                transition: "all ease 200ms",
              }}
            >
              <Row>
                <Col sm={8}>
                  <p className="h4 projectHeading">
                    <i>A Multi-Cloud application (Group Project)</i>
                  </p>
                </Col>
                <Col>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      paddingTop: "0.4rem",
                    }}
                  >
                    May 2020 - Aug 2020
                  </p>
                </Col>
              </Row>
              <p>
                <b>Goal:</b> To create a web application in multi-cloud
                architecture.
              </p>
              <b>Technologies:</b> AWS Elastic bean stalk, AWS Lambda Functions,
              GCP Cloud Run, GCP Cloud Functions, Azure-MYSQL, ReactJS, NodeJS,
              MYSQL
              <p className="buttonParagraph">
                <button
                  className="readMore"
                  onClick={() => setIsFlipped5((prev) => !prev)}
                >
                  Read More
                </button>
              </p>
            </div>
            <div
              className="CardBack bg-white"
              style={{
                paddingLeft: "1rem",
                paddingTop: "1rem",
                background: "#fff",
                borderRadius: "0.6em",
                margin: "1em",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow:
                  "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)",
                transition: "all ease 200ms",
              }}
            >
              <Row>
                <Col sm={1} className="gitIcon">
                  <a
                    style={{ display: "table-cell" }}
                    href="https://github.com/kumarmpk/csci5409_project/tree/master"
                    target="_blank"
                    className="anchorTag"
                    rel="noreferrer"
                  >
                    <Github />
                  </a>
                </Col>
                <Col>
                  <p>
                    <Asterisk />A web application was created using services of
                    three different cloud providers.
                  </p>
                  <p>
                    <Asterisk />
                    The application is divided into three major modules and each
                    module is deployed in a cloud provider.
                  </p>
                  <p>
                    <Asterisk />
                    All are inter-connected using API calls and database
                    transactions are controlled using XA transactions.
                  </p>
                </Col>
              </Row>
              <p className="buttonParagraph">
                <button
                  className="backButton"
                  onClick={() => setIsFlipped5((prev) => !prev)}
                >
                  Read Less
                </button>
              </p>
            </div>
          </ReactCardFlip>
        </Col>
        <Col>
          <ReactCardFlip isFlipped={isFlipped6} flipDirection="horizontal">
            <div
              className="CardFront bg-white"
              style={{
                background: "#fff",
                padding: "1rem",
                borderRadius: "0.6em",
                margin: "1em",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow:
                  "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)",
                transition: "all ease 200ms",
              }}
            >
              <Row>
                <Col sm={8}>
                  <p className="h4 projectHeading">
                    <i>
                      Protracker-A Project Management Application (Group
                      Project)
                    </i>
                  </p>
                </Col>
                <Col>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      paddingTop: "0.4rem",
                    }}
                  >
                    May 2020 - Aug 2020
                  </p>
                </Col>
              </Row>
              <p>
                <b>Goal:</b> To create a reliable, modern, and efficient web
                application.
              </p>
              <b>Technologies:</b> ReactJS, NodeJS with Express, MYSQL, AWS RDS,
              Axios, Heroku
              <p className="buttonParagraph">
                <button
                  className="readMore"
                  onClick={() => setIsFlipped6((prev) => !prev)}
                >
                  Read More
                </button>
              </p>
            </div>
            <div
              className="CardBack bg-white"
              style={{
                paddingLeft: "1rem",
                paddingTop: "1rem",
                background: "#fff",
                borderRadius: "0.6em",
                margin: "1em",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow:
                  "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)",
                transition: "all ease 200ms",
              }}
            >
              <Row>
                <Col sm={1} className="gitIcon">
                  <a
                    style={{ display: "table-cell" }}
                    href="https://github.com/kumarmpk/csci-5709_web_proj"
                    target="_blank"
                    className="anchorTag"
                    rel="noreferrer"
                  >
                    <Github />
                  </a>
                </Col>
                <Col>
                  <p>
                    <Asterisk /> A simple project management application with
                    user management, project management, team management,
                    task/issue management, sprint management, contact-us
                    features was developed.
                  </p>
                  <p>
                    <Asterisk />
                    Responsible for the task/issue management feature and
                    contact us feature.
                  </p>
                  <p>
                    <Asterisk />
                    Task/Issue management played a vital role in the project as
                    all the features are dependent on it.
                  </p>
                </Col>
              </Row>
              <p className="buttonParagraph">
                <button
                  className="backButton"
                  onClick={() => setIsFlipped6((prev) => !prev)}
                >
                  Read Less
                </button>
              </p>
            </div>
          </ReactCardFlip>
        </Col>
      </Row>
      <Row xs="1" sm="1" md="2" className="topRow">
        <Col>
          <ReactCardFlip isFlipped={isFlipped7} flipDirection="horizontal">
            <div
              className="CardFront bg-white"
              style={{
                background: "#fff",
                padding: "1rem",
                borderRadius: "0.6em",
                margin: "1em",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow:
                  "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)",
                transition: "all ease 200ms",
              }}
            >
              <Row>
                <Col sm={8}>
                  <p className="h4 projectHeading">
                    <i>Distributed Database application</i>
                  </p>
                </Col>
                <Col>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      paddingTop: "0.4rem",
                    }}
                  >
                    Oct 2020
                  </p>
                </Col>
              </Row>
              <p>
                <b>Goal:</b> To create an application that works with
                distributed database.
              </p>
              <b>Technologies:</b> GCP SQL, MYSQL, Java, XA transactions MYSQL
              <p className="buttonParagraph">
                <button
                  className="readMore"
                  onClick={() => setIsFlipped7((prev) => !prev)}
                >
                  Read More
                </button>
              </p>
            </div>
            <div
              className="CardBack bg-white"
              style={{
                paddingLeft: "1rem",
                paddingTop: "1rem",
                background: "#fff",
                borderRadius: "0.6em",
                margin: "1em",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow:
                  "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)",
                transition: "all ease 200ms",
              }}
            >
              <Row>
                <Col sm={1} className="gitIcon">
                  <a
                    style={{ display: "table-cell" }}
                    href="https://github.com/kumarmpk/csci5408_assignment2"
                    target="_blank"
                    className="anchorTag"
                    rel="noreferrer"
                  >
                    <Github />
                  </a>
                </Col>
                <Col>
                  <p>
                    <Asterisk />
                    An application that connects with three database.
                  </p>
                  <p>
                    <Asterisk />A database transaction might involve three
                    databases.
                  </p>
                  <p>
                    <Asterisk />A database is dedicated for data dictionary.
                  </p>
                </Col>
              </Row>
              <p className="buttonParagraph">
                <button
                  className="backButton"
                  onClick={() => setIsFlipped7((prev) => !prev)}
                >
                  Read Less
                </button>
              </p>
            </div>
          </ReactCardFlip>
        </Col>
        <Col>
          <ReactCardFlip isFlipped={isFlipped8} flipDirection="horizontal">
            <div
              className="CardFront bg-white"
              style={{
                background: "#fff",
                padding: "1rem",
                borderRadius: "0.6em",
                margin: "1em",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow:
                  "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)",
                transition: "all ease 200ms",
              }}
            >
              <Row>
                <Col sm={8}>
                  <p className="h4 projectHeading">
                    <i>Containerized Application</i>
                  </p>
                </Col>
                <Col>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      paddingTop: "0.4rem",
                    }}
                  >
                    Jun 2020
                  </p>
                </Col>
              </Row>
              <p>
                <b>Goal:</b> To create a containerized application.
              </p>
              <b>Technologies:</b> ReactJS, NodeJS, MYSQL, API, Axios, AWS
              Elastic beanstalk, GCP Cloud Run, GCP SQL
              <p className="buttonParagraph">
                <button
                  className="readMore"
                  onClick={() => setIsFlipped8((prev) => !prev)}
                >
                  Read More
                </button>
              </p>
            </div>
            <div
              className="CardBack bg-white"
              style={{
                paddingLeft: "1rem",
                paddingTop: "1rem",
                background: "#fff",
                borderRadius: "0.6em",
                margin: "1em",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow:
                  "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)",
                transition: "all ease 200ms",
              }}
            >
              <Row>
                <Col sm={1} className="gitIcon">
                  <a
                    style={{ display: "table-cell" }}
                    href="https://github.com/kumarmpk/csci5410_assignment2"
                    target="_blank"
                    className="anchorTag"
                    rel="noreferrer"
                  >
                    <Github />
                  </a>
                </Col>
                <Col>
                  <p>
                    <Asterisk />A frontend application developed using ReactJS
                    deployed in AWS Elastic beanstalk will communicate to three
                    containerized modules of the application deployed in GCP
                    Cloud Run.
                  </p>
                </Col>
              </Row>
              <p className="buttonParagraph">
                <button
                  className="backButton"
                  onClick={() => setIsFlipped8((prev) => !prev)}
                >
                  Read Less
                </button>
              </p>
            </div>
          </ReactCardFlip>
        </Col>
      </Row>
      <Row xs="1" sm="1" md="2" className="topRow">
        <Col>
          <ReactCardFlip isFlipped={isFlipped9} flipDirection="horizontal">
            <div
              className="CardFront bg-white"
              style={{
                background: "#fff",
                padding: "1rem",
                borderRadius: "0.6em",
                margin: "1em",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow:
                  "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)",
                transition: "all ease 200ms",
              }}
            >
              <Row>
                <Col sm={8}>
                  <p className="h4 projectHeading">
                    <i>Mathdoku</i>
                  </p>
                </Col>
                <Col>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      paddingTop: "0.4rem",
                    }}
                  >
                    Feb 2020
                  </p>
                </Col>
              </Row>
              <p>
                <b>Goal:</b> To work with exploring state space algorithms.
              </p>
              <b>Technologies:</b> Java, Recursive Algorithm
              <p className="buttonParagraph">
                <button
                  className="readMore"
                  onClick={() => setIsFlipped9((prev) => !prev)}
                >
                  Read More
                </button>
              </p>
            </div>
            <div
              className="CardBack bg-white"
              style={{
                paddingLeft: "1rem",
                paddingTop: "1rem",
                background: "#fff",
                borderRadius: "0.6em",
                margin: "1em",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow:
                  "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)",
                transition: "all ease 200ms",
              }}
            >
              <Row>
                <Col sm={1} className="gitIcon">
                  <a
                    style={{ display: "table-cell" }}
                    href="https://github.com/kumarmpk/csci3901_assignment4"
                    target="_blank"
                    className="anchorTag"
                    rel="noreferrer"
                  >
                    <Github />
                  </a>
                </Col>
                <Col>
                  <p>
                    <Asterisk />A program to solve Mathdoku puzzle using
                    recursive algorithm.
                  </p>
                </Col>
              </Row>
              <p className="buttonParagraph">
                <button
                  className="backButton"
                  onClick={() => setIsFlipped9((prev) => !prev)}
                >
                  Read Less
                </button>
              </p>
            </div>
          </ReactCardFlip>
        </Col>
      </Row>
    </div>
  );
}

export default AcademicProjects;
