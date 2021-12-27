import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const style = {
    whiteSpace: 'pre-line'
}

function ImageModal({ show, handleClose, modalData }) {
    return (
        <Modal show={show} onHide={handleClose} animation={false} size = "xl">
            <Modal.Header closeButton>
                <Modal.Title>
                    <h2 className = "text-burgundy">{modalData.title}</h2>
                </Modal.Title>
            </Modal.Header>
            <Row className = "align-items-center">
                <Col sm={12} md={5}>
                    <img src={modalData.image} alt="modal" className="img-fluid p-2" />
                </Col>
                <Col>
                    <Modal.Body style = {style}>{modalData.descriptionLong}</Modal.Body>
                </Col>
            </Row>
        </Modal>
    )
}

export default ImageModal
