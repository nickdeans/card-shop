import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import NotFound from './404notfound'
import Shop from './Pages/Shop'
import SingleProduct from './SingleProduct/SingleProduct'
import CartPage from './Cart/cart-page';
import Pay from './Pay/Pay'
import Success from './Success/Success'
import React from 'react';
import Breaks from './Pages/Breaks'
import Releases from './Pages/Releases'
import About from './Pages/About'
import Login from './Pages/Login'
import Register from './Pages/Register'


function App() {
  return (
  <>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={Shop} />
      <Route path='/breaks' component={Breaks} />
      <Route path='/releases' component={Releases} />
      <Route path='/about' component={About} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/product/:id' component={SingleProduct} />
      <Route path='/cart' component={CartPage} />
      <Route path='/pay' component={Pay} />
      <Route path='/success' component={Success} />
      <Route path='*' component={NotFound} />
    </Switch>
  </>
  );
}

export default App;
