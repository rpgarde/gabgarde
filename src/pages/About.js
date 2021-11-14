import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function Portfolio() {

    const workExperience = [
        {
            duration: "July 2021  - Present",
            company: "Queensland Museum",
            position: "Operational Officer"
        },
        {
            duration: "May 2021  - June 2021 (Contract)",
            company: "St Peters Lutheran College (Old Scholars Archive)",
            position: "Archives Consultant"
        },
        {
            duration: "August 2019  - Present",
            company: "Museum of Brisbane",
            position: "Assistant Conservator, Collections Assistant, and Visitor Experience Officer"
        },
        {
            duration: "January 2019  - September 2019",
            company: "The University of Queensland Art Museum",
            position: "Student Work Experience"
        },
    ]

    const education = [
        {
            duration: "2021-2022",
            school: "The University of Melbourne",
            degree: "Master of Cultural Materials Conservation"
        },
        {
            duration: "2019",
            school: "The University of Queensland",
            degree: "Graduate Certificate in Museum Studies"
        }
    ]

    return (
        <div>
            <Container className="min-vh-100" id="about">
                <h2 className="mt-3 text-burgundy text-center">I am versatile and multi-skilled.</h2>
                <p>I am an emerging conservator, currently enrolled in The University of Melbourne's Master of Cultural Materials Conservation program. I am honing my practical skills in conservation, while also developing a deeper understanding of the ethical considerations and standard professional practices in the field. I am a student member of the Australian Institute for the Conservation of Cultural Material (AICCM), and aspire to be a vocal, proactive advocate for cultural heritage. I am actively engaged in the field, and take opportunities to connect with like-minded professionals and contribute my unique perspectives. I truly have a deep love for history and the arts, and an appreciation and sensitivity for the countless human cultures scattered across different nations and time periods. </p>
                <Row>
                    <Col md={6}>
                        <h5 className="text-center">Work experience</h5>
                        {workExperience.map((job) => (
                            <Card className="border-0">
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">{job.duration}</Card.Subtitle>
                                    <Card.Title>{job.company}</Card.Title>
                                    <Card.Text>{job.position}</Card.Text>
                                </Card.Body>
                            </Card>

                        ))}
                    </Col>
                    <Col md={6}>
                        <h5 className="text-center">Education</h5>
                        {education.map((study) => (
                            <Card className="border-0">
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">{study.duration}</Card.Subtitle>
                                    <Card.Title>{study.school}</Card.Title>
                                    <Card.Text>{study.degree}</Card.Text>
                                </Card.Body>
                            </Card>

                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}