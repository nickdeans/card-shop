import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      {year} © ND Sports Cards
    </div>
  );
}

export default Footer;