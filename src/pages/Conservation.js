import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import conservationData from '../data/conservationData'

export default function Conservation() {

    return (
        <div className = "bg-light">
            <Container className="min-vh-100" id="conservation">
                <h2 className = "py-3 text-burgundy text-center">My conservation work</h2>
                <Row xs={1} md={2} className="g-4 justify-content-evenly">
                {conservationData.map((work)=>(
                    <Card style={{ width: '18rem' }} className = "m-3 border-0 shadow-sm">
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