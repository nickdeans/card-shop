import React from 'react';

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <div>
      <h1 className='footer-logo'>Thank you for visting my site!</h1>
      <div className='footer'>
        {year} © ND Sports Cards
      </div>
    </div>
  );
}

export default Footer;