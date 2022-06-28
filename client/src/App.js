import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './Body/HomePage/HomePage'
import NotFound from './utils/404notfound'
import Shop from './Pages/Shop/Shop'
import SingleProduct from './Pages/SingleProduct/SingleProduct'
import CartPage from './Pages/Cart/Cart-page';
import Success from './Pages/Success/Success'
import React from 'react';
import Breaks from './Pages/Breaks/Breaks'
import Releases from './Pages/Releases/Releases'
import About from './Pages/About/About'
import Login from './Pages/Login/Login'
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
      <Route path='/success' component={Success} />
      <Route path='*' component={NotFound} />
    </Switch>
  </>
  );
}

export default App;
