import Carousel from 'react-bootstrap/Carousel'
import { FaChevronCircleRight } from 'react-icons/fa'
import cover from '../images/cover.jpg'
import cover1 from '../images/cover1.jpg'
import cover2 from '../images/cover2.jpg'

const TopMain = () => {
    return (
        <>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cover}
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
                            src={cover1}
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
                            src={cover2}
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
