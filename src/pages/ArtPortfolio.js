import React,{useState} from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import portfolioData from '../data/portfolioData'
import ImageModal from '../components/ImageModal'

const styles = {
    objectFit: 'cover',
    maxHeight: '10rem',
    objectPosition: '50% 20%',
    cursor:'pointer'
}

export default function ArtPortfolio() {
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({})
    const handleClose = () => setShow(false);
    const handleShow = (work) => {
        setShow(true)
        setModalData({
            title:work.title,
            descriptionLong:work.descriptionLong,
            image:`/images/${work.image}`
        })
    };

    return (
        <div className="bg-light" id = "art">
            <Container className="min-vh-100">
                <h2 className="pt-3 text-burgundy text-center">My personal art projects</h2>
                <p className = "text-center">Click on any of the images for a more detailed write-up.</p>
                <Row>
                    {portfolioData.map((work) => (
                        <>
                            <Col sm={12} md={6} lg={4} className = "d-flex align-self-stretch">
                                <Card className="mb-3 border-0 shadow-sm">
                                    <Card.Body>
                                        <Card.Img onClick = {()=>handleShow(work)} variant="top" src={`/images/${work.image}`} style={styles} />
                                        <Card.Title className="my-2 text-center">
                                            <h5 className="text-burgundy">{work.title}</h5>
                                        </Card.Title>
                                        <Card.Text>{work.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </>
                    ))}
                    <ImageModal
                                modalData = {modalData}
                                show = {show}
                                handleClose = {handleClose}
                    />
            </Row>
        </Container>
        </div >
    )
}