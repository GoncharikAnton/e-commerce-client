import Container from "react-bootstrap/Container";
import {useContext, useEffect, useState} from "react";
import {DataContext} from "../../../context/context";
import {getProductById} from "../../../api/productsData";
import {BuyCard} from "../../../components/BuyCard/BuyCard";
import './Cart.css'
export const Cart = () => {

    const context = useContext(DataContext);
    const [products, setProducts] = useState([]);
    const [deletion, setDeletion] = useState(false);
    const [total, setTotal] = useState(0)
    useEffect(() => {
        const productsIds = JSON.parse(localStorage.getItem(`${context.user.email}`));
        setProducts(productsIds)
    }, [deletion])


    return(
        <Container className={'cartPage'}>
            {products.length ?
            products.map(item => <BuyCard key={`${item}CardBuy`}
                                          id={item}
                                          deletion={deletion}
                                          setDeletion={setDeletion}
                                          total={total}
                                          setTotal={setTotal}
            />)
            :
            <h2>You have no items in cart</h2>
            }
            Total: {total}
        </Container>
    )
}