import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Checkout from './Checkout';
import Success from './Success';
import Canceled from './Canceled';

import './css/normalize.css';
import './css/global.css';

const Stripe = () => {
  return (
    <Router>
      <Switch>
        <Route path="/success.html">
          <Success />
        </Route>
        <Route path="/canceled.html">
          <Canceled />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
}

export default Stripe;



// import React from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// import { CheckoutForm } from "./CheckoutForm";

// const PUBLIC_KEY = "pk_test_51JcDElKuTqehMMuIcod7LHO20bk3m92ouHTvTTzBvhjL4wZDeW2rVBbhWJuOPBiB3OvEYDKeAu2Zel21l8gr1GYp008TH7fCti";

// const stripeTestPromise = loadStripe(PUBLIC_KEY);

// const Stripe = () => {
//   return (
//     <Elements stripe={stripeTestPromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// };

// export default Stripe;