import React from 'react';
import Header from '../Body/Header/Header';

const NotFound = () => {
  const style = {
    fontWeight: 'bold',
    textAlign: 'center',
  }

  return (
    <>
        <Header />
        <p style={style}>Unfortunately we can't find that page</p>
    </>
  );
}

export default NotFound;