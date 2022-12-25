import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CustomFormCheck from "../../../components/FormCheck/CustomFormCheck";
import {useEffect, useState} from "react";
import {getAllProducts} from "../../../api/productsData";
import {ShortCard} from "../../../components/ShortCard/ShortCard";
import './AllProductsPage.css'
export const AllProductsPage = () => {


    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then((res, rej) => {
            setProducts([...res.data.data.result])
        })

    }, [])




    const price = [5, 10, 25, 50, 100, 150, 350, 500, 1000];
    const esrb = [4, 6, 8, 12, 14, 16, 18];
    const rating = [1, 2, 3, 4, 5];
    const categories = ['Action', 'Fighting', 'Shooter', 'RPG', 'Open world', 'Console'];
    return (
        <Container>
            <Row>
                <Col ml={3}md={3} ms={3}>
                            <CustomFormCheck title={'Price up to:'} items={price}/>
                            <CustomFormCheck title={'Categories'} items={categories}/>
                            <CustomFormCheck title={'ESRB'} items={esrb}/>
                            <CustomFormCheck title={'Rating'} items={rating}/>
                </Col>
                <Col ml={9}md={9} ms={9} className={'cardsDisplay'}>
                    {products.map(item => {
                        return <ShortCard className={'card'} key={item.id} item={item}/>
                    })}
                </Col>
            </Row>
         </Container>
    )
}