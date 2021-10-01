import React, { useContext, useState } from 'react';
import { CartContext } from '../context/cart-context';
import Layout from '../Layout/Layout';
import StripeCheckout from './stripe-checkout/Stripe-Checkout'
import './checkout.scss';

const Checkout = () => {
    const { itemCount, total } = useContext(CartContext);

    return (
        <Layout>
            <div className='checkout'>
                <h2>Checkout Summary</h2>
                <h3>{`TotalItems: ${itemCount}`}</h3>
                <h4>{`Amount to Pay: $${total}`}</h4>
                <StripeCheckout />
            </div>
        </Layout>
    )
}

export default Checkout;


