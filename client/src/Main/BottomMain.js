import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import box3 from '../images/box3.png'
import box4 from '../images/box4.png'
import banner from '../images/banner.png'

const BottomMain = () => {
    return (
        <>
            <div className='bottom-main-container'>
                <div className='customImgThree' />
                <div className='bottom-headline'>Coming Soon</div>
                <div className='customImgFour'>
                    <div className='card-container'>
                        <Card className='product-container3'>
                            <Card.Img variant="top" src={box4} className='box-img2' />
                            <Card.Body className='product-info'>
                                <h1>2022 Obsidian Basketball Box</h1>
                                <Card.Text>
                                New die-cut inserts to Obsidian this year are Eclipse and Supernova, which feature the top superstars in the league today.                                </Card.Text>
                                <div className='card-content'>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>                        
                        <Card className='product-container4'>
                            <Card.Img variant="top" src={box3} className='box-img' />
                            <Card.Body className='product-info'>
                                <h1>2022 Spectra Baseball Box</h1>
                                <Card.Text>
                                It’s one of the most attractive sports card products you’ll ever see and delivers a bevy of short-printed hits that can, quite frankly, be stunning.                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='customImgFive' />
                </div>
                <div className='banner-container'>
                    <img src={banner} alt='banner' className='banner-image'/>
                </div>
        </>
    )
}

export default BottomMain;