import { useState } from 'react';
import data from '../cardData';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import brady from '../images/brady.jpeg'
import ItemsCarousel from 'react-items-carousel';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const CardsMain = () => {
    const [dataArray, setDataArray] = useState(data);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    return (
        <>
            <div style={{ padding: `0 ${chevronWidth}px` }} className='carousel-container'>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={5}
                    gutter={20}
                    leftChevron={<button><FaAngleLeft /></button>}
                    rightChevron={<button><FaAngleRight /></button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                    infiniteLoop='true'
                >
                    {dataArray.map((card) => {
                        const { id, name, price, image, text } = card;
                        console.log(card);
                        return (
                            <div key={id} className='card' className="e-card e-card-horizontal">
                                <Card style={{ width: '9rem' }} className="e-card e-card-horizontal">
                                    <div className='card-image-container'>
                                         <Card.Img variant="top" src={image} />
                                    </div>
                                    <Card.Body className='card-info-container'>
                                        <Card.Title className='card-info'>{name}</Card.Title>
                                        <Card.Subtitle className='card-info-2'>
                                            {text}
                                        </Card.Subtitle>
                                        <h6 className='card-info-3'>${price} / Price</h6>
                                        <div className='card-info-4'>
                                        <Button variant="dark">Details</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })}
                </ItemsCarousel>
            </div>
        </>
    )
}

export default CardsMain;