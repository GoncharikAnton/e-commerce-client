import Container from "react-bootstrap/Container";
import {AdvertSlider} from "../../../components/AdvertSlider/AdvertSlider";
import axios from "axios";
import {useEffect, useState} from "react";
import {getAllProducts, getProductImagesById} from "../../../api/productsData";
import {ShortCard} from "../../../components/ShortCard/ShortCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {CardGroup} from "react-bootstrap";

export const MainPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then((res, rej) => {
            setProducts([...res.data.data.result])
        })

    }, [])



    return(
        <Container>
            <AdvertSlider/>
            <Container>
                <h1>Bestsellers</h1>
                <CardGroup>
                    {products.length &&
                        products.map((item, index) =>
                            <ShortCard key={item.id} item={item}/>
                        )
                    }

                </CardGroup>
            </Container>
        </Container>
    )
}