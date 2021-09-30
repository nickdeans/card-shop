import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './index.scss'
import ProductsContextProvider from './context/products-context'
import { BrowserRouter } from 'react-router-dom'
import CartContextProvider from './context/cart-context'

ReactDOM.render(
  <BrowserRouter>
    <ProductsContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductsContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


