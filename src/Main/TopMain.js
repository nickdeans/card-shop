import Carousel from 'react-bootstrap/Carousel'
import testImg from '../images/testImg.jpeg'
import testImg2 from '../images/testImg2.jpeg'
import testImg3 from '../images/testImg3.jpeg'

const TopMain = () => {
    return (
        <>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={testImg}
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
                            src={testImg2}
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
                            src={testImg3}
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
