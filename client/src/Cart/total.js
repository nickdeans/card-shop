import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const Total = ({ itemCount, total, history, clearCart }) => {
    return (
        <div className='total-container'>
            <div className='total'>
                <p>Total Items: {itemCount}</p>
                <p>{`Total: $${total}`}</p>
            </div>
            <div className='checkout'>
                <Button variant='dark' className='button is-black' onClick={() => history.push('/checkout')}>CHECKOUT</Button>
                <Button variant='danger' className='button is-white' onClick={() => clearCart()}>CLEAR</Button>
            </div>
        </div>
    )
}

export default withRouter(Total);