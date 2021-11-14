import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import portfolioData from '../data/portfolioData'

export default function Portfolio() {

    return (
        <div>
            <Container className="min-vh-100" id="portfolio">
                <h1 className = "my-3">Here's some of my art</h1>
                <Row xs={1} md={2} className="g-4">
                {portfolioData.map((work)=>(
                    <Card style={{ width: '18rem' }} className = "m-3">
                        <Card.Body>
                        <Card.Img variant="top" src={`/images/${work.image}`} />
                            <Card.Title>{work.title}</Card.Title>
                            <Card.Text>{work.description}</Card.Text>
                        </Card.Body>
                    </Card>

                ))}
                </Row>
            </Container>
        </div>
    )
}