import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getProductById, getProductImagesById, getProductsSpecs} from "../../../api/productsData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ImgSlider} from "../../../components/ImgSlider/ImgSlider";
import {CustomButton} from "../../../components/CustomButton/CustomButton";
import {log} from "debug";

export const ProductPage = () => {

    const params = useParams()
    const [product, setProduct] = useState('');
    const [images, setImages] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [defaultTopic, setDefaultTopic] = useState('description');
    const [specs, setSpecs] = useState({});
    useEffect(() => {
        getProductById(params.id).then(res => {
            getProductImagesById(params.id).then(resI => {
                    getProductsSpecs(params.id, res.data.data.result[0].category_id).then(resS => {
                        setProduct(res.data.data.result[0])
                        setImages(resI.data.data.result)
                        setSpecs(resS.data.data.result[0])
                    })
                }
            )
        })
    }, [])
    const subtractHandler = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }
    const additionHandler = () => {
        if (quantity < +product.units_in_stock) {
            setQuantity(quantity + 1)
        }
    }

    const features = () => {
        if(+product.category_id === 9){
            return(
                <>
                    <p>Optical drive: {specs.optical_drive ? 'Yes' : 'No'}</p>
                    <p>WiFi: {specs.wifi ? 'Yes' : 'No'}</p>
                    <p>Bluetooth: {specs.bluetooth ? 'Yes' : 'No'}</p>
                    <p>Generation: {specs.generation}</p>
                    <p>CPU: {specs.cpu}</p>
                    <p>Storage type: {specs.storage_type}</p>
                    <p>Type of RAM: {specs.type_of_ram}</p>
                    <p>Capacity of the storage: {specs.capacity_storage}GB</p>
                    <p>Color: {specs.color}</p>
                </>
            )
        }else{
            return(
                <>
                    <p>ESRB rating: {specs.esrb_rating}</p>
                    <p>Multiplayer: {specs.multiplayer ? 'Yes' : 'No'}</p>
                    <p>Provides VR: {specs.vr ? 'Yes' : 'No'}</p>
                    <p>Platform: {specs.platform}</p>
                </>
            )
        }

    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>{product.title}</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={8} md={8} sm={8}>
                    <ImgSlider images={images}/>
                </Col>
                <Col lg={4} md={4} sm={4}>
                    <Col><p>Manufacturer: {product.manufacturer}</p></Col>
                    <Col><p>Rating: {product.rating}</p></Col>
                    <Col><p>Price per unit: {product.price}$</p></Col>
                    <Col><p>In Stock: {product.units_in_stock}</p></Col>
                    <Col>
                        Quantity: <CustomButton title={'-'} onclick={subtractHandler}/>
                        <span>{quantity}</span>
                        <CustomButton title={'+'} onclick={additionHandler}/>

                    </Col>
                    <Col>
                        <CustomButton title={'Add to wishlist'} width={135}/>
                        <CustomButton title={'Add to cart'} width={135}/>

                    </Col>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span onClick={() => setDefaultTopic('description')}>Description</span>
                    <span onClick={() => setDefaultTopic('features')}>Features</span>
                </Col>
            </Row>
            <Row>
                {defaultTopic === 'features' ? (
                    <>
                        {features()}
                    </>
                    )
                    :
                    (<p>{product.description}</p>)}
            </Row>
        </Container>
    )
}