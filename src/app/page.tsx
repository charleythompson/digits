import { Col, Container, Row } from 'react-bootstrap';
import { Calendar2CheckFill, FileEarmarkTextFill, PeopleFill } from 'react-bootstrap-icons';

/** The address book landing page. */
const Home = () => (
  <main className="flex-grow-1">
    <Container id="landing-page" className="py-3">
      <Row className="text-center g-4">
        <Col xs={12} md={4}>
          <PeopleFill size={100} aria-hidden="true" />
          <h1 className="fs-2">Multiple Users</h1>
          <h5 className="fw-normal">
            This address book enables any number of users to register and save their business contacts.
            You can only see the contacts you have created.
          </h5>
        </Col>
        <Col xs={12} md={4}>
          <FileEarmarkTextFill size={100} aria-hidden="true" />
          <h1 className="fs-2">Contact Details</h1>
          <h5 className="fw-normal">
            For each contact, you can save their name, address, and phone number.
          </h5>
        </Col>
        <Col xs={12} md={4}>
          <Calendar2CheckFill size={100} aria-hidden="true" />
          <h1 className="fs-2">Timestamped Notes</h1>
          <h5 className="fw-normal">
            Each time you make contact with a contact, you can write a note that summarizes the conversation.
            This note is saved along with a timestamp with the contact.
          </h5>
        </Col>
      </Row>
    </Container>
  </main>
);

export default Home;
