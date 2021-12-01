import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout'
import './success.scss'

const Success = () => {

  return (
    <Layout>
      <div className='success-header'>
        <h1>Payment completed :)</h1>
        <h1>Thank you for shopping at ND Sports Cards!</h1>
        <h3 className='link'><Link to="/">Return Home</Link></h3>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </Layout>
  );
};

export default Success;