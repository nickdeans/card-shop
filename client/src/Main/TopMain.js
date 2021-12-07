import Carousel from 'react-bootstrap/Carousel'
import { FaChevronCircleRight } from 'react-icons/fa'
import cover1 from '../images/cover1.jpg'
import banner1 from '../images/banner1.jpg'
import banner3 from '../images/banner3.jpg'
import '../index.css'


const TopMain = () => {
    return (
        <>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                            id='tempImg'
                        />

                        <Carousel.Caption>
                            <h3>First slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Second slide"
                            id='tempImg'
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cover1}
                            alt="Third slide"
                            id='tempImg'
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default TopMain;
