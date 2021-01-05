import { Row, Card, Col } from "react-bootstrap";
import { Asterisk, Github } from "./Icons";
import "./AcademicProjects.css";

export default function AcademicProjects() {
  return (
    <div>
      <Row xs="1" sm="1" md="2" className="topRow">
        <Col>
          <Card className="mainCard">
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col sm={8}>
                    <p className="h4">
                      <i>A Simple RDBMS application (Group Project)</i>
                    </p>
                  </Col>
                  <Col>
                    <p style={{ fontSize: "0.9rem", paddingTop: "0.4rem" }}>
                      Sep 2020 - Dec 2020
                    </p>
                  </Col>
                </Row>
              </Card.Title>

              <Row>
                <Col>
                  <p>
                    <b>Goal:</b> To create a simple data base management system
                    (DBMS).
                  </p>

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
                  <Row>
                    <Col sm={1}>
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
                    <Col sm={10} style={{ paddingTop: "0.5rem" }}>
                      Technologies: Java, Spring boot, JSON, HTML, Thymeleaf
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mainCard">
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col sm={8}>
                    <p className="h4">
                      <i>NHL(Ice Hockey) game simulation (Group Project)</i>
                    </p>
                  </Col>
                  <Col>
                    <p style={{ fontSize: "0.9rem", paddingTop: "0.4rem" }}>
                      Sep 2020 - Dec 2020
                    </p>
                  </Col>
                </Row>
              </Card.Title>

              <Row>
                <Col>
                  <p>
                    <b>Goal: </b>To write clean code in test driven development
                    as per industrial standards using Agile methodology.
                  </p>

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
                  <Row>
                    <Col sm={1}>
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
                    <Col sm={10}>
                      Technologies: Java with TDD approach (Test Driven
                      Development), Agile, Maven, MYSQL, JSON, GitLab, JIRA
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs="1" sm="1" md="2" className="topRow">
        <Col>
          <Card className="mainCard">
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col sm={8}>
                    <p className="h4">
                      <i>Letsplay-An Android application</i>
                    </p>
                  </Col>
                  <Col>
                    <p style={{ fontSize: "0.9rem", paddingTop: "0.4rem" }}>
                      Sep 2020 - Dec 2020
                    </p>
                  </Col>
                </Row>
              </Card.Title>

              <Row>
                <Col>
                  <p>
                    <b>Goal:</b> To create a simple android application.
                  </p>

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

                  <Row>
                    <Col sm={1}>
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
                    <Col sm={10} style={{ paddingTop: "0.5rem" }}>
                      Technologies: Kotlin, GCP Cloud Firestore.
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mainCard">
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col sm={8}>
                    <p className="h4">
                      <i>Learning Management System (Group Project)</i>
                    </p>
                  </Col>
                  <Col>
                    <p style={{ fontSize: "0.9rem", paddingTop: "0.4rem" }}>
                      May 2020 - Aug 2020
                    </p>
                  </Col>
                </Row>
              </Card.Title>
              <Row>
                <Col>
                  <p>
                    <b>Goal: </b>To create a serverless application.
                  </p>

                  <p>
                    <Asterisk />A serverless application was developed with
                    register, login, real time chat, chat bot, and sentiment
                    analysis features, using AWS and GCP cloud services.
                  </p>
                  <p>
                    <Asterisk />I implemented the frontend using ReactJS and
                    real time chat using google pub/sub as per requirement.
                  </p>
                  <Row>
                    <Col sm={1}>
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
                    <Col sm={10}>
                      Technologies: ReactJS, GCP Cloud Functions, AWS Lambda
                      Functions, GCP Pub/Sub, GCP Cloud Storage
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs="1" sm="1" md="2" className="topRow">
        <Col>
          <Card className="mainCard">
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col sm={8}>
                    <p className="h4">
                      <i>A Multi-Cloud application (Group Project)</i>
                    </p>
                  </Col>
                  <Col>
                    <p style={{ fontSize: "0.9rem", paddingTop: "0.4rem" }}>
                      May 2020 - Aug 2020
                    </p>
                  </Col>
                </Row>
              </Card.Title>

              <Row>
                <Col>
                  <p>
                    <b>Goal:</b> To create a web application in multi-cloud
                    architecture.
                  </p>

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

                  <Row>
                    <Col sm={1}>
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
                    <Col sm={10}>
                      Technologies: AWS Elastic bean stalk, AWS Lambda
                      Functions, GCP Cloud Run, GCP Cloud Functions,
                      Azure-MYSQL, ReactJS, NodeJS, MYSQL
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mainCard">
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col sm={8}>
                    <p className="h4">
                      <i>
                        Protracker-A Project Management Application (Group
                        Project)
                      </i>
                    </p>
                  </Col>
                  <Col>
                    <p style={{ fontSize: "0.9rem", paddingTop: "0.4rem" }}>
                      May 2020 - Aug 2020
                    </p>
                  </Col>
                </Row>
              </Card.Title>

              <Row>
                <Col>
                  <p>
                    <b>Goal:</b> To create a reliable, modern, and efficient web
                    application.
                  </p>
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

                  <Row>
                    <Col sm={1}>
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
                    <Col sm={10}>
                      Technologies: ReactJS, NodeJS with Express, MYSQL, AWS
                      RDS, Axios, Heroku
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs="1" sm="1" md="2" className="topRow">
        <Col>
          <Card className="mainCard">
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col sm={8}>
                    <p className="h4">
                      <i>Distributed Database application</i>
                    </p>
                  </Col>
                  <Col>
                    <p style={{ fontSize: "0.9rem", paddingTop: "0.4rem" }}>
                      Oct 2020
                    </p>
                  </Col>
                </Row>
              </Card.Title>
              <Row>
                <Col>
                  <p>
                    <b>Goal: </b>To create an application that works with
                    distributed database.
                  </p>

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
                  <Row>
                    <Col sm={1}>
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
                    <Col sm={10} style={{ paddingTop: "0.5rem" }}>
                      Technologies: GCP SQL, MYSQL, Java, XA transactions
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mainCard">
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col sm={8}>
                    <p className="h4">
                      <i>Containerized Application</i>
                    </p>
                  </Col>
                  <Col>
                    <p style={{ fontSize: "0.9rem", paddingTop: "0.4rem" }}>
                      Jun 2020
                    </p>
                  </Col>
                </Row>
              </Card.Title>
              <Row>
                <Col>
                  <p>
                    <b>Goal: </b>To create a containerized application.
                  </p>

                  <p>
                    <Asterisk />A frontend application developed using ReactJS
                    deployed in AWS Elastic beanstalk will communicate to three
                    containerized modules of the application deployed in GCP
                    Cloud Run.
                  </p>
                  <Row>
                    <Col sm={1}>
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
                    <Col sm={10}>
                      Technologies: ReactJS, NodeJS, MYSQL, API, Axios, AWS
                      Elastic beanstalk, GCP Cloud Run, GCP SQL
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs="1" sm="1" md="2" className="topRow">
        <Col>
          <Card className="mainCard">
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col sm={8}>
                    <p className="h4">
                      <i>Mathdoku</i>
                    </p>
                  </Col>
                  <Col>
                    <p style={{ fontSize: "0.9rem", paddingTop: "0.4rem" }}>
                      Feb 2020
                    </p>
                  </Col>
                </Row>
              </Card.Title>

              <Row>
                <Col>
                  <p>
                    <b>Goal:</b> To work with exploring state space algorithms.
                  </p>

                  <p>
                    <Asterisk />A program to solve Mathdoku puzzle using
                    recursive algorithm.
                  </p>
                  <Row>
                    <Col sm={1}>
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
                    <Col sm={10} style={{ paddingTop: "0.5rem" }}>
                      Technologies: Java, Recursive Algorithm
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
