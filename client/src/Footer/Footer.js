import React from 'react';

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <div>
      <div className='footer'>
        {year} © ND Sports Cards
      </div>
    </div>
  );
}

export default Footer;