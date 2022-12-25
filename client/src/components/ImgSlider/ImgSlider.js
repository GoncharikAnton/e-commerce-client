import Carousel from 'react-bootstrap/Carousel';
import './ImgSlider.css'
export const ImgSlider = ({images}) => {

    const itemsHandler = (item) => {
        return(
            <Carousel.Item key={item.img}>
                <img
                    className="w-100"
                    src={item.img}
                    alt={`${item.img} slide`}
                />
            </Carousel.Item>

        )
    }


    return (
        <Carousel >
            {images.map(item => itemsHandler(item))}
        </Carousel>
    );
}

