import React, { useContext, useState } from 'react';
import { CartContext } from '../context/cart-context';
import Layout from '../Layout/Layout'
import Checkout from './Checkout'
import './checkout.scss';


const CheckoutContainer = () => {
    const { itemCount, total } = useContext(CartContext);

    return (
        <Layout>
            <div className='checkout'>
                <h2>Checkout Summary</h2>
                <h3>{`TotalItems: ${itemCount}`}</h3>
                <h4>{`Amount to Pay: $${total}`}</h4>
                <Checkout />
            </div>
        </Layout>
    )
}

export default CheckoutContainer;