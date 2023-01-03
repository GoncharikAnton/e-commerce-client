import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {CustomButton} from "../CustomButton/CustomButton";
import {useContext, useEffect, useState} from "react";
import {addToCartLocally, getProductById, getProductImagesById} from "../../api/productsData";
import './WischCard.css'
import {Link} from "react-router-dom";
import {userDeleteFromWishList} from "../../api/usersData";
import {DataContext} from "../../context/context";
export const WishCard = ({product_id, deleteFromProducts}) => {

    const context = useContext(DataContext);
    const [item, setItem] = useState({});
    const [images, setImages] = useState([])
    useEffect(() => {

        getProductById(product_id).then(res => {
            getProductImagesById(product_id).then(resI => {
                setImages(resI.data.data.result[0])
                setItem(res.data.data.result[0])
            })
        })


    }, [])


    const deleteHandler = () => {
        deleteFromProducts(product_id)
        userDeleteFromWishList(context.user.id, item.id)
    }

    const addToCart = () => {
        addToCartLocally(context.user.email, item.id)
    }

    return (
        <Row className={'wishCard'}>
            <Col>
                <img src={images.img} alt=""/>
            </Col>
            <Col>
                <Link to={`/products/${item.id}`}>{item.title}</Link>
            </Col>
            <Col>
                {item.units_in_stock}
            </Col>
            <Col>
                {item.price}$
            </Col>
            <Col>
                <CustomButton title={'Add to cart'} width={140} onclick={addToCart}/>
            </Col>
            <Col>
                <CustomButton title={'X'} onclick={deleteHandler}/>
            </Col>
        </Row>
    )
}