import React from "react";
import "./SkillsSection.css";
import { Container, ProgressBar, Row, Col } from "react-bootstrap";

function SkillsSection(props) {
  const frontend_skills = [
    { name: "Javascript", score: "80", label: "80/100" },
    { name: "ReactJS", score: "75", label: "75/100" },
    { name: "HTML5", score: "75", label: "75/100" },
    { name: "CSS", score: "80", label: "80/100" },
  ];
  const backend_skills = [
    { name: "Java", score: "90", label: "90/100" },
    { name: "Python", score: "80", label: "80/100" },
    { name: "NodeJS", score: "70", label: "70/100" },
  ];
  const cloud_skills = [
    { name: "AWS", score: "85", label: "85/100" },
    { name: "GCP", score: "85", label: "85/100" },
  ];
  const db_skills = [
    { name: "MYSQL", score: "85", label: "85/100" },
    { name: "SQL", score: "85", label: "85/100" },
    { name: "MongoDB", score: "80", label: "80/100" },
  ];
  const other_skills_1 = [
    { name: "Agile", score: "85", label: "85/100" },
    { name: "Git", score: "85", label: "85/100" },
    { name: "Jira", score: "85", label: "85/100" },
  ];
  const other_skills_2 = [
    { name: "Waterfall", score: "85", label: "85/100" },
    { name: "Spring MVC", score: "85", label: "85/100" },
    { name: "Hibernate", score: "80", label: "80/100" },
  ];
  return (
    <div className="skills-section" id="skills">
      <p className="h1">Skills</p>

      <Row className="topRow">
        <Col
          className="skillsGrpRow "
          style={{ paddingLeft: "25px", paddingRight: "25px" }}
        >
          <p className="h3">Frontend</p>
          {frontend_skills.map((item, index) => {
            return (
              <Row className="skillsRow" key={index}>
                <Col sm={4} className="skills-label">
                  <p className="h6">
                    <b>{item.name}</b>
                  </p>
                </Col>
                <Col sm={8}>
                  <ProgressBar
                    variant="danger"
                    now={item.score}
                    style={{ height: "3rem", background: "grey" }}
                    label={item.label}
                  />
                </Col>
              </Row>
            );
          })}
        </Col>
        <Col
          className="skillsGrpRow "
          style={{ paddingLeft: "25px", paddingRight: "25px" }}
        >
          <p className="h3">Backend</p>
          {backend_skills.map((item, index) => {
            return (
              <Row className="skillsRow" key={index}>
                <Col sm={4} className="skills-label">
                  <b>{item.name}</b>
                </Col>
                <Col sm={8}>
                  <ProgressBar
                    variant="danger"
                    now={item.score}
                    style={{ height: "3rem", background: "grey" }}
                    label={item.label}
                  />
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
      <Row className="topRow">
        <Col
          className="skillsGrpRow "
          style={{ paddingLeft: "25px", paddingRight: "25px" }}
        >
          <p className="h3">Cloud</p>
          {cloud_skills.map((item, index) => {
            return (
              <Row className="skillsRow" key={index}>
                <Col sm={4} className="skills-label">
                  <p className="h6">
                    <b>{item.name}</b>
                  </p>
                </Col>
                <Col sm={8}>
                  <ProgressBar
                    variant="danger"
                    now={item.score}
                    style={{ height: "3rem", background: "grey" }}
                    label={item.label}
                  />
                </Col>
              </Row>
            );
          })}
        </Col>
        <Col
          className="skillsGrpRow "
          style={{ paddingLeft: "25px", paddingRight: "25px" }}
        >
          <p className="h3">Database</p>
          {db_skills.map((item, index) => {
            return (
              <Row className="skillsRow" key={index}>
                <Col sm={4} className="skills-label">
                  <b>{item.name}</b>
                </Col>
                <Col sm={8}>
                  <ProgressBar
                    variant="danger"
                    now={item.score}
                    style={{ height: "3rem", background: "grey" }}
                    label={item.label}
                  />
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
      <Row className="topRow">
        <Col
          className="skillsGrpRow "
          style={{ paddingLeft: "25px", paddingRight: "25px" }}
        >
          {other_skills_1.map((item, index) => {
            return (
              <Row className="skillsRow" key={index}>
                <Col sm={4} className="skills-label">
                  <p className="h6">
                    <b>{item.name}</b>
                  </p>
                </Col>
                <Col sm={8}>
                  <ProgressBar
                    variant="danger"
                    now={item.score}
                    style={{ height: "3rem", background: "grey" }}
                    label={item.label}
                  />
                </Col>
              </Row>
            );
          })}
        </Col>
        <Col
          className="skillsGrpRow "
          style={{ paddingLeft: "25px", paddingRight: "25px" }}
        >
          {other_skills_2.map((item, index) => {
            return (
              <Row className="skillsRow" key={index}>
                <Col sm={4} className="skills-label">
                  <b>{item.name}</b>
                </Col>
                <Col sm={8}>
                  <ProgressBar
                    variant="danger"
                    now={item.score}
                    style={{ height: "3rem", background: "grey" }}
                    label={item.label}
                  />
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    </div>
  );
}

export default SkillsSection;
