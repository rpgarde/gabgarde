import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Contact() {
    return (
        <div className = "bg-light">
            <Container id="contact">
                <h2 className="text-center text-burgundy p-3">Get in touch</h2>
                <Row className="d-flex justify-content-center">
                    <Col md={6}>
                        <Card className="border-0 mb-3">
                            <Card.Body>
                                <Card.Text>
                                    Email me at gabgarde@gmail.com or use the form below
                                </Card.Text>
                                <Form>
                                    <Form>
                                    <Form.Group className="mb-3" controlId="name">
                                            <Form.Control type="text" placeholder="Name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Control type="email" placeholder="Email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="mobile">
                                            <Form.Control type="number" placeholder="Mobile" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="message">
                                            <Form.Control as="textarea" rows={3} placeholder = "Your message"/>
                                            <Button variant="outline-dark" type="submit" className = "mt-3">
                                                Submit
                                            </Button>
                                        </Form.Group>
                                    </Form>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}