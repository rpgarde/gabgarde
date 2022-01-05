import * as React from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import skills from '../data/skillsData';


export default function Skills() {

    return (
        <div className = "bg-light">
            <Container className="min-vh-100" fluid="sm" id="about">
                <h2 className="py-3 text-burgundy text-center">My skills</h2>
                <Row className="justify-content-start">
                    {skills.map((skill) => (
                        <Col sm={12} md={6} lg={4} className="d-flex align-self-stretch">
                            <Card className="mb-3 border-0 shadow-sm">
                                <Card.Body>
                                    <Card.Title className = "my-2 text-center">
                                    <h5>{skill.category}</h5>
                                        </Card.Title>
                                <ul>
                                    {skill.content.map(item => (
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