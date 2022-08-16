import * as React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "@formspree/react";
import Alert from "react-bootstrap/Alert";

export default function Contact() {
  const [state, handleSubmit] = useForm("mnqledgo");

  return (
    <div className="bg-white">
      <Container id="contact">
        <h2 className="text-center text-burgundy p-3">Get in touch</h2>
        <Row className="d-flex justify-content-center">
          <Col md={6}>
            <p>Email me at gabgarde@gmail.com or use the form below</p>
            <Card className="border-0 mb-3 shadow-sm">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Control type="text" placeholder="Name" name="name" id="name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Control type="email" placeholder="Email" name="email" id="email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="mobile">
                    <Form.Control type="number" placeholder="Mobile" name="mobile" id="mobile" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="message">
                    <Form.Control as="textarea" rows={3} placeholder="Your message" />
                  </Form.Group>
                  <Button
                    variant="outline-dark"
                    type="submit"
                    className="mb-3"
                    disabled={state.submitting}>
                    Submit
                  </Button>
                </Form>
                {state.succeeded && (
                  <Alert variant="success">
                    Thank you for your message. I'll get back to you soon.
                  </Alert>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
