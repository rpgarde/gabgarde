import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function Intro() {
    return (
        <div>
            <Container className="min-vh-75" fluid="sm" id="home">
                <Card className="border-0">
                    <Card.Body>
                        <Row className = "d-flex align-items-center">
                            <Col>
                                <Card.Title>
                                    <h1 className="text-burgundy">Museums and galleries professional, emerging conservator, and visual artist based in Brisbane, Australia.</h1>
                                </Card.Title>
                            </Col>
                            <Col sm={6} md ={5}>
                                <Image src="/images/profile.jpeg" roundedCircle fluid />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}