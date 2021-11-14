import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function Intro() {
    return (
        <div>
            <Container className = "min-vh-100" id = "home">
            <Card>
                <Card.Body className = "border-0">
                <Row>
                    <Col md = {4}>
                        <Card.Img src="/images/profile.jpeg" />
                    </Col>
                    <Col>
                        <Card.Title>
                            Gab Garde
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