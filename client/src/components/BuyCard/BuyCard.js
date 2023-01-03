import {useContext, useEffect, useState} from "react";
import {deleteFromCartLocally, getProductById, getProductImagesById, getProductsSpecs} from "../../api/productsData";
import {Card, ListGroup} from "react-bootstrap";
import {CustomButton} from "../CustomButton/CustomButton";
import {DataContext} from "../../context/context";

export const BuyCard = ({id, deletion, setDeletion, total, setTotal}) => {

    const [item, setItem] = useState({});
    const [count, setCount] = useState(1);
    const [images, setImages] = useState([]);
    const [specs, setSpecs] = useState([]);
    const context = useContext(DataContext)
    useEffect(() => {
        getProductById(id).then(res => {
            getProductImagesById(id).then(resI => {
                    getProductsSpecs(id, res.data.data.result[0].category_id).then(resS => {
                        setImages(resI.data.data.result)
                        setItem(res.data.data.result[0])
                        setSpecs(resS.data.data.result[0])
                    })
                }
            )
        })
    }, [])


    const deleteFromCartHandler = () => {
        deleteFromCartLocally(context.user.email, id);
        setDeletion(!deletion)
    }
    setTotal(item.price*count+total)

    return (
        <Card style={{ width: '45%', padding: '5px'}}>
            <Card.Img variant="top" src={images.length ? images[0].img : ''} style={{width: '13rem', height: '16rem', margin: "auto"}}/>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.short_description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Units to order: {count}</ListGroup.Item>
                <ListGroup.Item>Price per unit: {item.price}$</ListGroup.Item>
                <ListGroup.Item>Total price {item.price*count}$</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <CustomButton width={150} title={'Delete from cart'} onclick={deleteFromCartHandler}/>
            </Card.Body>
        </Card>
    )
}
