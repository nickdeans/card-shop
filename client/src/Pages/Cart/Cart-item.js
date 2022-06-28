import React from 'react';
import { FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa'

const CartItem = (props) => {
    const { name, image, price, quantity, id, text, increase, decrease, removeProduct } = props;
    const product = { name, image, price, quantity, id, text }

    return (
        <div className='cart-item'>
            <div className='item-image'>
                <img src={image} alt='product' />
            </div>
            <div className='name-price'>
                <h4>{name}</h4>
                <p>${price}</p>
            </div>
            <div className='quantity'>
                <p>{`Quantity: ${quantity}`}</p>
            </div>
            <div className='btns-container'>
                <button className='btn-increase' onClick={() => increase(product)}>
                    <FaPlus />
                </button>
                {
                    quantity === 1 &&
                    <button className='btn-trash' onClick={() => removeProduct(product)}>
                        <FaTrashAlt />
                    </button>
                }
                {
                    quantity > 1 && 
                    <button className='btn-decrease' onClick={() => decrease(product)}>
                        <FaMinus />
                    </button>
                }
            </div>
        </div>
    )
}

export default CartItem;