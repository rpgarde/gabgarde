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
            <Container className="min-vh-100" fluid="lg" id="home">
                <Card className="border-0">
                    <Card.Body>
                        <Row className = "d-flex align-items-center">
                            <Col sm={6} md ={4}>
                                <Image src="/images/profile.jpeg" roundedCircle fluid />
                            </Col>
                            <Col>
                                <Card.Title>
                                    <h1 className="text-burgundy">Hello, I'm Gab Garde.</h1>
                                </Card.Title>
                                <Card.Text>
                                    I am a museums and galleries professional, emerging conservator, and visual artist based in Brisbane.
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}