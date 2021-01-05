import { Row, Card, Col } from "react-bootstrap";
import { Asterisk } from "./Icons";

export default function CapgeminiProjects() {
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
                      <i>Email Integration</i>
                    </p>
                  </Col>
                  <Col>
                    <p style={{ fontSize: "0.9rem", paddingTop: "0.4rem" }}>
                      Dec 2018 - Oct 2019
                    </p>
                  </Col>
                </Row>
              </Card.Title>

              <Row>
                <Col>
                  <p>
                    <Asterisk />
                    Emails sent by the users are read, validated and launched
                    into the application automatically.
                  </p>
                  <p>
                    <Asterisk />
                    Create two new screens to validate and process the emails
                    received by the application.
                  </p>
                  <p>
                    Technologies: Java, Hibernate, SQL, Barcode Xpress, JSP,
                    Javascript, JIRA, GIT
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
                      <i>Rightfax integration</i>
                    </p>
                  </Col>
                  <Col>
                    <p style={{ fontSize: "0.9rem", paddingTop: "0.4rem" }}>
                      Dec 2017 - Dec 2018
                    </p>
                  </Col>
                </Row>
              </Card.Title>

              <Row>
                <Col>
                  <p>
                    <Asterisk />
                    Introduced a new channel called Right Fax to launch
                    transactions for India, Thailand, UAE, and Jordan users.
                  </p>
                  <p>
                    <Asterisk />
                    Developed a new tool L3T to receive the transactions from
                    different country servers and commit the transactions into
                    Filenet with metadata.
                  </p>
                  <p>Technologies: Java, Hibernate, SQL, JIRA, GIT</p>
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
                      <i>Rapid Cash Plus</i>
                    </p>
                  </Col>
                  <Col>
                    <p style={{ fontSize: "0.9rem", paddingTop: "0.4rem" }}>
                      Dec 2016 - Dec 2017
                    </p>
                  </Col>
                </Row>
              </Card.Title>

              <Row>
                <Col>
                  <p>
                    <Asterisk />
                    Launched the Rapid Cash Plus application in India,
                    Bangladesh, Sri Lanka, Vietnam, Zimbabwe, Brunei, Thailand,
                    Botswana, Ghana, Indonesia, Nigeria, and Zambia.
                  </p>
                  <p>
                    <Asterisk />
                    Implemented country specific requirements.
                  </p>
                  <p>
                    Technologies: Java, Hibernate, Filenet, SQL, JSP, JIRA, GIT
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
                      <i>Checklist Widget</i>
                    </p>
                  </Col>
                  <Col>
                    <p style={{ fontSize: "0.9rem", paddingTop: "0.4rem" }}>
                      Apr 2016 - Dec 2016
                    </p>
                  </Col>
                </Row>
              </Card.Title>

              <Row>
                <Col>
                  <p>
                    <Asterisk />
                    Developed a dynamic checklist widget.
                  </p>
                  <p>
                    <Asterisk />
                    The checklist items depends on countries involved,
                    currencies involved, and time of transaction.
                  </p>
                  <p>
                    Technologies: Java, Hibernate, JSP, Javascript, JIRA, GIT
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
