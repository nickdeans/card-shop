import Card from 'react-bootstrap/Card'
import box2 from '../images/opticc.png'
import React from 'react';
import Layout from '../Layout/Layout';
import './breaks.styles.scss';

const Breaks= () => {

  return (
    <div className="background-color-break-page">
    <Layout>
      <div className='product-list-container'>
        <h2 className='product-list-title'>Breaks</h2>
      </div>
      <div className='breaks-container'>   
      <div className='info-container'>
        <div className='info-box'>
            <h1 className='break-header' >What are Breaks? </h1>
            <p className='details-content'>
                <br />
                1. Breaks are an opportunity for you to buy spots in brand new card box openings!
                <br />
                2. Join live sports cards box openings without having to purchase a whole box. 
                <br/>
                3. You are purchasing one spot in the break and assigned one random team. 
                <br/>
                4. Every card drawn from that team will go to you! Good luck!
            </p>
        </div>
      </div>                     
      <div className='card-container'>
            <Card className='product-container2' style={{position: "relative",width: "50%",display: "flex",top: "0rem"}}>
                <Card.Img variant="top" src={box2} className='box-img' />
                <Card.Body className='product-info'>
                    <h1>2022 Optic Basketball Break!</h1>
                    <h6 className="release-date-heading">Coming Soon</h6>
                    <Card.Text style={{display: "flex", textAlign: "left"}}>
                    Donruss Optic returns to the hardwood this year with a loaded new rookie class and a full arsenal of stunning parallel cards.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </div>
    </Layout>
    </div>
  );
}

export default Breaks;