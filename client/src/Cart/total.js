import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

import StripeCheckout from 'react-stripe-checkout'
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router'

const KEY = 'pk_test_51JcDElKuTqehMMuIcod7LHO20bk3m92ouHTvTTzBvhjL4wZDeW2rVBbhWJuOPBiB3OvEYDKeAu2Zel21l8gr1GYp008TH7fCti'


const Total = ({ itemCount, total, clearCart }) => {
    const [stripeToken, setStripeToken] = useState(null)
    const history = useHistory()

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try{
                const res = await axios.post(
                    'http://localhost:5000/api/checkout/payment', {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                    )
                    console.log(res.data);
                    history.push('/success');
            } catch(err) {
                console.log(err)
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken, history])

    return (
        <div className='total-container'>
            <div className='total'>
                <p>Total Items: {itemCount}</p>
                <p>{`Total: $${total}`}</p>
            </div>
            <div className='checkout'>
            {stripeToken ? (<span>Proccessing. Please Wait...</span>
        ) : (
            <StripeCheckout name="Nick Shop" image=''
            billingAddress
            shippingAddress
            description='your total in $20'
            amount={2000}
            token={onToken}
            stripeKey={KEY}>
                <Button variant='dark' className='button is-black' 
                    >
                    CHECKOUT
                </Button>
            </StripeCheckout>
        )}
                <Button variant='danger' className='button is-white' onClick={() => clearCart()}>CLEAR</Button>
            </div>
        </div>
    )
}

export default withRouter(Total);