import { Row, Card, Col } from "react-bootstrap";
import { Asterisk } from "./Icons";

export default function OFSSProjects() {
  return (
    <div>
      <Row xs="1" sm="1" md="2" className="topRow">
        <Col>
          <Card className="mainCard">
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col>
                    <p className="h4">
                      <i>Connexis Supply Chain-Front Office 8.0</i>
                    </p>
                  </Col>
                  <Col>
                    <p style={{ fontSize: "0.9rem", paddingTop: "0.4rem" }}>
                      Apr 2015 - Apr 2016
                    </p>
                  </Col>
                </Row>
              </Card.Title>

              <Row>
                <Col>
                  <p>
                    <Asterisk />
                    Added third party limits to the limit management module.
                  </p>
                  <p>
                    <Asterisk />
                    Restructured the existing transaction flow to capture the
                    existing limits and new limits.
                  </p>
                  <p>
                    Technologies: Java, Spring, Hibernate, JSF, SQL, JIRA, GIT
                  </p>
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
                  <Col>
                    <p className="h4">
                      <i>Connexis Supply Chain-Front Office 7.0</i>
                    </p>
                  </Col>
                  <Col>
                    <p style={{ fontSize: "0.9rem", paddingTop: "0.4rem" }}>
                      Dec 2014 - Apr 2015
                    </p>
                  </Col>
                </Row>
              </Card.Title>

              <Row>
                <Col>
                  <p>
                    <Asterisk />
                    Coordinated all the UAT deployments of this release from the
                    client’s location, <b>Singapore</b>.
                  </p>
                  <p>
                    <Asterisk />
                    Tracked the UAT issues to closure and organized daily
                    meetings with all stakeholders from client office.
                  </p>
                  <p>Technologies: Java, Spring, SQL, JIRA, GIT</p>
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
                  <Col>
                    <p className="h4">
                      <i>Connexis Supply Chain-Back Office 3.0</i>
                    </p>
                  </Col>
                  <Col>
                    <p style={{ fontSize: "0.9rem", paddingTop: "0.4rem" }}>
                      Aug 2014 - Dec 2014
                    </p>
                  </Col>
                </Row>
              </Card.Title>

              <Row>
                <Col>
                  <p>
                    <Asterisk />
                    Introduced loan extension module. The extension request will
                    settle the existing discount/loan and create a new
                    discount/loan with a new due date and interest rate.
                  </p>
                  <p>
                    <Asterisk />
                    Developed a new screen to process new extension requests,
                    accounting entries, credit reports and debit reports of the
                    new loan.
                  </p>
                  <p>
                    Technologies: Java, Spring, Hibernate, SQL, iReport, JIRA,
                    GIT
                  </p>
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
                  <Col>
                    <p className="h4">
                      <i>Connexis Supply Chain-Front Office 6.0</i>
                    </p>
                  </Col>
                  <Col>
                    <p style={{ fontSize: "0.9rem", paddingTop: "0.4rem" }}>
                      Aug 2013 - Aug 2014
                    </p>
                  </Col>
                </Row>
              </Card.Title>

              <Row>
                <Col>
                  <p>
                    <Asterisk />
                    Modified the mail templates to add pdf or zip attachment
                    depending upon the requirement.
                  </p>
                  <p>
                    <Asterisk />
                    Developed a toolkit to convert excel data into XML format
                    and zip all the XML files into a single file. Basic
                    validations are done in macros.
                  </p>
                  <p>
                    <Asterisk />
                    Developed a screen to upload the zip file and persist the
                    XML content into corresponding backend tables. High-level
                    validations are handled in PL-SQL procedures.
                  </p>
                  <p>
                    Technologies: Java, JAXB, Spring, Hibernate, SQL, iReport,
                    VBA, GIT
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
