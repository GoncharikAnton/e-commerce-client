import Container from "react-bootstrap/Container";
import {AdvertSlider} from "../../../components/AdvertSlider/AdvertSlider";
import axios from "axios";
import {useEffect, useState} from "react";
import {getAllProducts} from "../../../dataHooks/useProductsData";

export const MainPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then((res, rej) => {
            setProducts([...res.data.data.result])
        })
    }, [])
    console.log(products)

    return(
        <Container>
            <AdvertSlider/>
            <Container>
                {products.length &&
                products.map(item => <h1>{item.title}</h1>)
                }
            </Container>
        </Container>
    )
}