import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";

export const LongCard = () => {
    return (
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src="./images/gow.jpeg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            <Button variant="dark">Add to wishlist</Button>
                            <Button variant="dark">Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

