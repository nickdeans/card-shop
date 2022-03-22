import Card from 'react-bootstrap/Card'
import meImage from '../images/me.PNG'
import React, { useContext } from 'react';
import Layout from '../Layout/Layout';
import './about.styles.scss';

const About = () => {

  return (
    <div className="background-color-break-page">
    <Layout>
      <div className='product-list-container'>
        <h2 className='product-list-title'>About</h2>
      </div>               
      <div className='about-container'>
            <Card className='product-container2' style={{position: "relative",width: "50%",display: "flex",top: "0rem"}}>
                <Card.Img variant="top" src={meImage} className="me-image" />
                <Card.Body className='product-info'>
                    <h1>About Me!</h1>
                    <Card.Text style={{display: "flex", textAlign: "center"}}>
                        <p>My name is Nick and I am a full-stack software developer and a certified AWS Solutions Architect. I created this web application to combine two of my favorite passions - Sports Cards and Software Development!
                            <br/>
                            <br/>
                            Check out my <a href="https://www.linkedin.com/in/nickabramowicz/">LinkedIn</a> to know more!
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    </Layout>
    </div>
  );
}

export default About;