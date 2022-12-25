import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useEffect, useState} from "react";
import {getProductImagesById} from "../../api/productsData";
import {Link} from "react-router-dom";

export const ShortCard = ({item}) => {

    const [images, setImages] = useState(['../imgs/gow.jpeg'])

    useEffect(() => {
        getProductImagesById(item.id).then((res) => {
            if(res.data.data.result){
                let data = res.data.data.result.map(item => item.img)
                setImages([...data])
            }
        });
    }, [])


    return (
        <Card style={{width: '14rem'}}>
            {/*<Card.Img variant="top" src={images[0]} style={{width: '200px', height: '250px', margin: "auto"}}/>*/}
            <div style={{width: '70%', height: '12rem', margin: "auto"}}>
                <Card.Img variant="top" src={images[0]} style={{width: '100%', height: '100%', margin: "auto"}}/>
            </div>
            <Card.Body>
                <Card.Title><Link to={`/products/${item.id}`}>
                    {item.title}
                </Link></Card.Title>
                <Card.Text style={{height: '100px', overflow: 'auto'}}>
                    {item.short_description}
                </Card.Text>
            </Card.Body>
            <Card.Footer style={{backgroundColor: 'white'}}>
                <small className="text-muted">
                    <Button variant="dark">Add to wishlist</Button>
                    <Button variant="dark">Add to cart</Button>
                </small>
            </Card.Footer>
        </Card>
    );
}