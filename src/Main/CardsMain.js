import { useState } from 'react';
import data from '../cardData';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import brady from '../images/brady.jpeg'

const CardsMain = () => {
    const [dataArray, setDataArray] = useState(data);

    return (
        <>
            <div>
                {dataArray.map((card) => {
                    const { id, name, price, image, text } = card;
                    console.log(card);
                    return (
                        <div key={id} className='card' className="e-card e-card-horizontal">
                            <Card style={{ width: '9rem' }} className="e-card e-card-horizontal">
                                <Card.Img variant="top" src={brady} />
                                <Card.Body>
                                    <Card.Title>{name} {price}</Card.Title>
                                    <Card.Text>
                                        {text}
    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
                <button onClick={() => setDataArray([])}>
                    Clear items
                </button>
            </div>
        </>
    )
}

export default CardsMain;