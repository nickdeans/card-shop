import React from 'react';
import brady from '../images/brady.jpeg';
import './product.scss'

const FeaturedProduct = (product) => {
    const { name, image, price, text } = product;

    return (
        <div className='featured-product'>
            <div>
                <img src={brady} alt='product' />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{price}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default FeaturedProduct;