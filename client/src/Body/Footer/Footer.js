import React from 'react';
import logo from '../images/logoFoot.jpeg'

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <div>
      <img src={logo} className='footer-logo' alt='footer'/>

      <div className='footer'>
        {year} © ND Sports Cards
      </div>
    </div>
  );
}

export default Footer;