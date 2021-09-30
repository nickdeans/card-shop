import React, { useContext } from 'react';
import { isInCart } from '../helpers'
import { CartContext } from '../context/cart-context'
// import brady from '../images/brady.jpeg';
import { withRouter } from 'react-router-dom';
import './product.scss'

const FeaturedProduct = (props) => {
    const { name, image, price, text, history, id } = props;
    const product = { name, image, price, text, id };
    const { addProduct, cartItems, increase } = useContext(CartContext)
    const itemInCart = isInCart(product, cartItems)
    return (
        <div className='featured-product'>
            <div className='featured-image' onClick={() => history.push(`/product/${id}`)}>
                <img src={image} alt='product' />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{price}</p>
                {
                    !itemInCart &&
                    <button onClick={() => addProduct(product)}>Add to Cart</button>
                }
                {
                    itemInCart &&
                    <button onClick={() => increase(product)}>Add More</button>
                }
            </div>
        </div>
    )
}

export default withRouter(FeaturedProduct);