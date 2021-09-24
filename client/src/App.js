import './App.css';
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import StripeContainer from './Stripe/StripeContainer';


function App() {
  return (
  <>
        {/* <div className='App'>
          <StripeContainer />
        </div> */}
    <Header />
    <Main />
    <Footer />
  </>
  );
}

export default App;
