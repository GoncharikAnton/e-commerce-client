import {useContext, useEffect, useState} from "react";
import {userGetWishList} from "../../../api/usersData";
import {DataContext} from "../../../context/context";
import Container from "react-bootstrap/Container";
import {WishCard} from "../../../components/WishCard/WishCard";
import {useBootstrapPrefix} from "react-bootstrap/ThemeProvider";
import Col from "react-bootstrap/Col";
import {CustomButton} from "../../../components/CustomButton/CustomButton";
import Row from "react-bootstrap/Row";

export const Wishlist = () => {

    const context = useContext(DataContext)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        userGetWishList(context.user.id).then(res => {
            setProducts(res.data.data.result)
        })
    }, [])

    const deleteFromProducts = (product_id) => {
        const tmpArr = products.filter(item => item.product_id !== product_id)
        setProducts(tmpArr)
    }

    return (
        <Container>
            <h2>Your Wishlist</h2>
            <Row>
                <Col>
                    <h5>Img:</h5>
                </Col>
                <Col>
                    <h5>Title:</h5>
                </Col>
                <Col>
                    <h5>Item in stock:</h5>
                </Col>
                <Col>
                    <h5>Price per unit:</h5>
                </Col>
                <Col>
                    <h5>Add</h5>
                </Col>
                <Col>
                    <h5>Delete</h5>
                </Col>
            </Row>
            {products.length ?
            products.map(item => {
                return (
                    <WishCard key={item.product_id} product_id={item.product_id}
                    deleteFromProducts={deleteFromProducts}
                    />
                )
            })
            : (<h1>No products in your wishlist</h1>)}
        </Container>
    )
}