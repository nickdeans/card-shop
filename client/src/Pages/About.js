import Card from 'react-bootstrap/Card'
import box2 from '../images/opticc.png'
import React, { useContext } from 'react';
import Layout from '../Layout/Layout';
import './breaks.styles.scss';

const About = () => {

  return (
    <div className="background-color-break-page">
    <Layout>
      <div className='product-list-container'>
        <h2 className='product-list-title'>About</h2>
      </div>
      <div className='breaks-container'>   
      <div className='info-container'>
        <div className='info-box'>
            <h1 className='break-header' >About</h1>
        </div>
      </div>                     
      <div className='card-container'>
            <Card className='product-container2' style={{position: "relative",width: "50%",display: "flex",top: "0rem"}}>
                <Card.Img variant="top" src={box2} className='box-img' />
                <Card.Body className='product-info'>
                    <h1>Image Header</h1>
                    <h6 className="release-date-heading">Coming Soon</h6>
                    <Card.Text style={{display: "flex", textAlign: "left"}}>
                        About text                    
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </div>
    </Layout>
    </div>
  );
}

export default About;