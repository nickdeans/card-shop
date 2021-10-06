import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/cart-context'
import { fetchFromAPI } from '../helpers'
import { useStripe } from '@stripe/react-stripe-js';


const formatPrice = ({ amount, currency, quantity }) => {
  const numberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    currencyDisplay: 'symbol',
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency = true;
  for (let part of parts) {
    if (part.type === 'decimal') {
      zeroDecimalCurrency = false;
    }
  }
  amount = zeroDecimalCurrency ? amount : amount / 100;
  const total = (quantity * amount).toFixed(2);
  return numberFormat.format(total);
};

const Checkout = () => {
    const { itemCount, total } = useContext(CartContext);
    const { cartItems } = useContext(CartContext);
    const stripe = useStripe(); 


  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    async function fetchConfig() {
      // Fetch config from our backend.
      const {
        unitAmount,
        currency
      } = await fetch('https://nd-card-shop.herokuapp.com/config').then(r => r.json());
      setAmount(unitAmount);
      setCurrency(currency);
    }
    fetchConfig();
  }, []);


//     const response = await {
//         body: { line_items },
//       };
  
//       const { items } = response;
//       const { error } = await stripe.redirectToCheckout({
//         items
//       });
      
//       if (error) {
//         console.log(error);
//       }
//   }

  return (
    <div className="sr-root">
      <div className="sr-main">
        <section className="container">
          {/* <div>
            <h1>Single photo</h1>
            <h4>Purchase a Pasha original photo</h4>
            <div className="pasha-image">
              <img
                alt="Random asset from Picsum"
                src="https://picsum.photos/280/320?random=4"
                width="140"
                height="160"
              />
            </div>
          </div> */}
          <form action="/create-checkout-session" method="POST">
            <div className="quantity-setter">
              {/* <button
                className="increment-btn"
                disabled={quantity === 1}
                onClick={() => setQuantity(quantity - 1)}
                type="button"
              >
                -
              </button> */}

              {/* <button
                className="increment-btn"
                disabled={quantity === 10}
                onClick={() => setQuantity(quantity + 1)}
                type="button"
              >
                +
              </button> */}
            </div>
            <button role="link" id="submit" type="submit"> 
              Buy x          <input
                type="number"
                id="quantity-input"
                min="1"
                max="10"
                value={quantity}
                name="quantity"
                readOnly
              />
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Checkout;