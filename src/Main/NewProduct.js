import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import box from '../images/box.png'

const NewProduct = () => {
    return (
        <>
            <div className='new-release-container'>
                <div className='customImgTwo'>
                    <div className='card-container'>
                        <Card className='product-container'>
                            <Card.Img variant="top" src={box} className='box-img' />
                            <Card.Body  >
                                <Card.Title className='card-content'>Card Title</Card.Title>
                                <Card.Text className='card-content'>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <div className='card-content'>

                                <Button variant="primary" >Go somewhere</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>                        
                        <Card className='product-container2'>
                            <Card.Img variant="top" src={box} className='box-img' />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card></div>
                </div>
                <div className='mid-headline'>New Releases</div>
            </div>
        </>
    )
}

export default NewProduct;