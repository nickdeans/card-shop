import React from 'react';
import { FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa'

const CartItem = (product) => {
    const { name, image, price, quantity } = product;

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
                <button className='btn-increase'>
                    <FaPlus />
                </button>
                {
                    quantity === 1 &&
                    <button className='btn-trash'>
                        <FaTrashAlt />
                    </button>
                }
                {
                    quantity > 1 && 
                    <button className='btn-decrease'>
                        <FaMinus />
                    </button>
                }
            </div>
        </div>
    )
}

export default CartItem;