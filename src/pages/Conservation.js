import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import conservationData from '../data/conservationData'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export default function Conservation() {

    return (
        <div className="bg-light">
            <Container className="min-vh-100" id="conservation">
                <h2 className="py-3 text-burgundy text-center">My conservation work</h2>
                <Row className="justify-content-start">
                    {conservationData.map((work) => (
                        <Col sm={12} md={6} lg={4} className="d-flex align-self-stretch">
                            <Card className="mb-3 border-0 shadow-sm">
                                <Card.Body>
                                    <Card.Title className = "my-2">
                                    <h5 className="text-burgundy">{work.title}</h5>
                                        </Card.Title>
                                    <Card.Subtitle className = "my-2 text-muted">{work.dates}</Card.Subtitle>
                                <ul>
                                    {work.description.map(item => (
                                        <li>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}