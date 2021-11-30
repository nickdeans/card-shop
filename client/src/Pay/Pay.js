import StripeCheckout from 'react-stripe-checkout'
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router'

const KEY = 'pk_test_51JcDElKuTqehMMuIcod7LHO20bk3m92ouHTvTTzBvhjL4wZDeW2rVBbhWJuOPBiB3OvEYDKeAu2Zel21l8gr1GYp008TH7fCti'

const Pay = () => {
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
        <div 
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >   
        {stripeToken ? (<span>Proccessing. Please Wait...</span>
        ) : (
            <StripeCheckout name="Nick Shop" image=''
            billingAddress
            shippingAddress
            description='your total in $20'
            amount={2000}
            token={onToken}
            stripeKey={KEY}>
                <button
                    style={{
                        border: 'none',
                        width: 120,
                        borderRadius: 5,
                        padding: '20px',
                    }}
                    >
                    Pay Now
                </button>
            </StripeCheckout>
        )}
        </div>
    )
}

export default Pay;