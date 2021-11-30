import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import box from '../images/box.png'
import box2 from '../images/opticc.png'

const NewProduct = () => {
    return (
        <>
            <div className='new-release-container'>
                <div className='customImgTwo'>
                    <div className='card-container'>
                        <Card className='product-container'>
                            <Card.Img variant="top" src={box} className='box-img' />
                            <Card.Body className='product-info'>
                                <h1>2021 Certified Football Box</h1>
                                <Card.Text>
                                A popular early-season collecting staple arrives with the release of Panini America’s 2021 Certified Football, a captivating, colorful product. 
                                </Card.Text>
                                <div className='card-content'>

                                {/* <Button variant="dark" >Details</Button> */}
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>                        
                        <Card className='product-container2'>
                            <Card.Img variant="top" src={box2} className='box-img' />
                            <Card.Body className='product-info'>
                                <h1>2021 Optic Basketball Box</h1>
                                <Card.Text>
                                Donruss Optic returns to the hardwood this year with a loaded new rookie class and a full arsenal of stunning parallel cards.
                                </Card.Text>
                                {/* <Button variant="dark">Details</Button> */}
                            </Card.Body>
                        </Card></div>
                </div>
                <div className='mid-headline'>New Releases</div>
            </div>
        </>
    )
}

export default NewProduct;