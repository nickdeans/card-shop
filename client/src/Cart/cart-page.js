import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import Layout from '../Layout/Layout';
import Total from './total'
import CartItem from './cart-item'
import './cart-page.scss'

const CartPage = () => {
    const { cartItems, itemCount, total, increase, decrease, removeProduct, clearCart } = useContext(CartContext);
    const funcs = { increase, decrease, removeProduct }

    return (
        <Layout>
            <>
                <h1>Cart</h1>
                {
                    cartItems.length === 0 ? <div className='empty-cart'>Your Cart is Empty</div> : 
                    <>
                        <div className='cart-page'>
                            <div className='cart-item-container'>
                                {
                                    cartItems.map(item => <CartItem {...item} key={item.id} { ...funcs } />)
                                }
                            </div>
                        <Total itemCount={itemCount} total={total} clearCart={clearCart}/>
                        </div>
                    </>
                }
            </>
        </Layout>
    )
}

export default CartPage;