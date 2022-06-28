import React, { useContext } from 'react';
import { isInCart } from '../../utils/helpers'
import { CartContext } from '../../context/cart-context'
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import './product.scss'

const FeaturedProduct = (props) => {
    const { name, image, price, text, history, id } = props;
    const product = { name, image, price, text, id };
    const { addProduct, cartItems, increase } = useContext(CartContext)
    const itemInCart = isInCart(product, cartItems)
    return (
        <div className='featured-product'>
            <div onClick={() => history.push(`/product/${id}`)}>
                <img src={image} alt='product' className='featured-image'/>
            </div>
            <div>
                <h3 className='card-information'>{name}</h3>
                <h6 className='card-info2'>{text}</h6>
                <p className='card-info3'>${price} / PRICE</p>
                <div className='btn-style'>
                {
                    !itemInCart &&
                    <Button variant="dark" onClick={() => addProduct(product)}>Add to Cart</Button>
                }
                {
                    itemInCart &&
                    <Button variant="outline-dark" onClick={() => increase(product)}>Add More</Button>
                }

                </div>
            </div>
        </div>
    )
}

export default withRouter(FeaturedProduct);