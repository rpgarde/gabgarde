import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function Publications() {
  return (
    <div id="publications">
      <Container fluid="sm" id="about">
        <h2 className="py-3 text-burgundy text-center">Publications</h2>
        <Row xs={1} md={2} className="g-4 justify-content-evenly">
          <Col md={6}>
            <Card className="border-0">
              <Card.Body>
                <Card.Title className="text-burgundy">
                  <h5>
                    Conserving oppression: Historical revisionism and the preservation of cultural
                    materials in a post-Marcos Philippines
                  </h5>
                </Card.Title>
                <Card.Subtitle className="mb-2 fw-bold">
                  The Scroll, published by The Student Conservators at Melbourne (SC@M)
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">December 2021</Card.Subtitle>
                <Card.Text>
                  Delighted to have contributed to the inaugural issue of The Scroll. My article was
                  adapted from a much longer essay I wrote when I was just starting out in the
                  Program. It touches on issues of ethics and morality in the conservation of
                  cultural materials relating to warfare and totalitarian regimes.
                </Card.Text>
                <Button
                  href="https://static1.squarespace.com/static/5aacaec7c258b40bb8770222/t/61aaf94f6e0d51341bf0694c/1638594947132/Scroll_vol1_no1_2021_Dec.pdf"
                  variant="outline-dark">
                  Read here
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="border-0">
              <Card.Body>
                <Card.Title className="text-burgundy">
                  <h5>
                    Navigating Cultural Identity – One Filipino migrant’s personal and overly
                    detailed journey to conservation
                  </h5>
                </Card.Title>
                <Card.Subtitle className="mb-2 fw-bold">
                  Australian Institute for the Conservation of Cultural Material (AICCM)
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">June 2021</Card.Subtitle>
                <Card.Text>
                  I had never written to be published before, but I recently tried my hand at
                  writing an article for the Australian Institute for the Conservation of Cultural
                  Material (AICCM); to my surprise, it was approved for publication. It is a
                  cathartic, personal, stream-of-consciousness piece about my evolving cultural
                  identity and its relationship with my professional development as an emerging
                  conservator and a museums and galleries professional. I am sure there are points
                  that other Filipinos and members of the Filipino diaspora would disagree with me
                  on. Having been away from home for a few years now, and acknowledging my
                  relatively insular upbringing in Metro Manila, I may not have the best
                  understanding of the country's current state, but the issue of cultural identity
                  is as personal as it is complex and multi-faceted.
                </Card.Text>
                <Button
                  href="https://aiccm.org.au/network-news/navigating-cultural-identity-journey-to-conservation/"
                  variant="outline-dark">
                  Read here
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Publications;
