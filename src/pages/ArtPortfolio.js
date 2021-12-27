import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import portfolioData from '../data/portfolioData'

const styles = {
    objectFit: 'cover',
    maxHeight: '10rem',
    objectPosition: '50% 20%'
}

export default function ArtPortfolio() {

    return (
        <div className="bg-light">
            <Container className="min-vh-100" id="art">
                <h2 className="py-3 text-burgundy text-center">My personal art projects</h2>
                <Row className="justify-content-evenly">
                    {portfolioData.map((work) => (
                        <Col sm={12} md={6} lg={4}>
                            <Card className="my-3 border-0 shadow-sm">
                                <Card.Body>
                                    <Card.Img variant="top" src={`/images/${work.image}`} style={styles} />
                                    <Card.Title className="my-2 text-center">
                                        <h5 className="text-burgundy">{work.title}</h5>
                                    </Card.Title>
                                    <Card.Text>{work.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}