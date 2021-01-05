import React from "react";
import "./ExperienceSection.css";
import { Row, Card, Col } from "react-bootstrap";
import capgemini from "../images/capgemini.jpeg";
import ofss from "../images/ofss.jpeg";
import { PlayFill } from "./Icons";

function ExperienceSection() {
  return (
    <div className="experience-section" id="experience">
      <p className="h1 bg-info heading">Experience</p>
      <Row className="topRow">
        <Card className="mainCard">
          <Card.Body>
            <Row>
              <Col sm={4}>
                <Card.Img variant="top" src={capgemini} />
              </Col>
              <Col sm={8}>
                <Row>
                  <Col xs lg={4}>
                    <p className="h3">Senior Consultant</p>
                  </Col>
                  <Col
                    md="auto"
                    style={{
                      paddingTop: "0.6rem",
                      fontSize: "0.8rem",
                    }}
                  >
                    <p>
                      <i>Apr 2016 - Oct 2019</i>
                    </p>
                  </Col>
                  <Col xs lg={5}>
                    <p style={{ paddingTop: "0.6rem", fontSize: "0.9rem" }}>
                      <b>Client:</b> Standard Chartered Bank (SCB)
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p style={{ fontSize: "0.9rem" }}>
                      <b>Project:</b> Electronic Operations (eOps) is an
                      intranet banking application used for opening all type of
                      accounts; applying for credit cards and loans; money
                      transfer; and storing customer information.
                    </p>
                  </Col>
                </Row>
                <p>
                  <PlayFill />
                  Digitalized the manual application form processing.
                </p>
                <p>
                  <PlayFill />
                  Developed a tool to retrieve the reference number from the
                  interface system.
                </p>
                <p>
                  <PlayFill />
                  Introduced a new job to receive, store and launch a
                  transaction into the Rapid Cash Plus system.
                </p>
                <p>
                  <PlayFill />
                  Customized and Implemented the Rapid Cash Plus application in
                  12 countries in the span of two years.
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Row>
              <Col sm={4}>
                <Card.Img variant="top" src={ofss} />
              </Col>
              <Col sm={8}>
                <Row>
                  <Col xs lg={5}>
                    <p className="h3">Associate Consultant</p>
                  </Col>
                  <Col
                    md="auto"
                    style={{
                      paddingTop: "0.6rem",
                      fontSize: "0.8rem",
                    }}
                  >
                    <p>
                      <i>Aug 2013 - Apr 2016</i>
                    </p>
                  </Col>
                  <Col xs lg={4}>
                    <p style={{ paddingTop: "0.6rem", fontSize: "0.9rem" }}>
                      <b>Client:</b> BNP Paribas
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p style={{ fontSize: "0.9rem" }}>
                      <b>Project:</b> Connexis Supply Chain Management is a
                      internet banking application used to apply, process,
                      maintain, and generate reports specific to a portfolio.
                      Request loan, request extension on a loan, settle up a
                      loan, manage interest rates, limits, and much more can be
                      done using the application.
                    </p>
                  </Col>
                </Row>
                <p>
                  <PlayFill />
                  Created a toolkit to convert excel data into XML format and
                  zip all the XML files into a single file.
                </p>
                <p>
                  <PlayFill />
                  Coordinated all the UAT releases and acted as a bridge between
                  the users and the offshore team, <b>Singapore</b>.
                </p>
                <p>
                  <PlayFill />
                  Restructured the limits module and introduced two new limits.
                </p>
                <p>
                  <PlayFill />
                  Added extension features to the existing loan module.
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}

export default ExperienceSection;
