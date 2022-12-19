import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ShortCard = (item) => {
    console.log(item)
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./images/gow.jpeg" />
            <Card.Body>
                <Card.Title>God of War: Ragnarok</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur deserunt distinctio dolor dolorem expedita magnam neque obcaecati pariatur suscipit.
                </Card.Text>
                <Button variant="dark">Add to wishlist</Button>
                <Button variant="dark">Add to cart</Button>
            </Card.Body>
        </Card>
    );
}