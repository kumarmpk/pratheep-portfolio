import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer className="mt-5 footer-main border-top">
      <Container fluid="false" className="p-2">
        <Row className="justify-content-bottom p-3">
          <Col className="p-0 md={3} sm={12}">Pratheep Kumar Manoharan</Col>
          <Col className="p-0 d-flex justify-content-end md={3}">
            Copyright @ 2020 by Pratheep
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
