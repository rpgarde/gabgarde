import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function Contact() {
    return (
        <div>
            <Container id = "contact">
                <h1 className = "text-center">Get in touch</h1>
                <Row className = "d-flex justify-content-center">
                    <Col md = {6}>
            <Card className = "border-0">
                <Card.Body>
                        <Card.Text>
                            Email: gabgarde@gmail.com
                        </Card.Text>
                        <Card.Text>
                            Phone: 0412xxxxxx
                        </Card.Text>
                </Card.Body>
            </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}