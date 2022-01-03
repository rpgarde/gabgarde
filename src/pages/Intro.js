import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import profile from '../images/profile.jpeg'

export default function Intro() {

    const [introOne, setIntroOne] = useState(false)
    const [introTwo, setIntroTwo] = useState(false)
    const [introThree, setIntroThree] = useState(false)

    useEffect(()=>{
        const timeoutOne = setTimeout(()=>{
            setIntroOne(true)
        },1000)
        const timeoutTwo = setTimeout(()=>{
            setIntroTwo(true)
        },2000)
        const timeoutThree = setTimeout(()=>{
            setIntroThree(true)
        },3000)
    })

    return (
        <div>
            <Container className="min-vh-75" fluid="sm" id="home">
                <Card className="border-0">
                    <Card.Body>
                        <Row className="d-flex align-items-center">
                            <Col>
                                <Card.Title>
                                    <h1 className="text-burgundy">
                                        <span className={introOne?"opacity-1":"opacity-0"}>Museums and galleries professional, </span>
                                        <span className={introTwo?"opacity-1":"opacity-0"}>emerging conservator, </span>
                                        <span className={introThree?"opacity-1":"opacity-0"}>and visual artist based in Brisbane, Australia.</span>
                                    </h1>
                                </Card.Title>
                            </Col>
                            <Col sm={6} md={5}>
                                <Image src={profile} roundedCircle fluid />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}