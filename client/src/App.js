import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import NotFound from './404notfound'
import Shop from './Pages/Shop'

import React from 'react';
import StripeContainer from './Stripe/StripeContainer';


function App() {
  return (
  <>
        {/* <div className='App'>
          <StripeContainer />
        </div> */}
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={Shop} />
      <Route path='*' component={NotFound} />
    </Switch>
  </>
  );
}

export default App;
