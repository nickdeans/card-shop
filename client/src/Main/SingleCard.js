import React, { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import brady from '../images/brady.jpeg'
import { isInCart } from '../helpers'
import { CartContext } from '../context/cart-context'
import { withRouter } from 'react-router-dom'
import './singleCard.scss'


const SingleCard = (props) => {
    const { name, image, price, text, history, id } = props;
    const product = { name, image, price, text, id };
    const { addProduct, cartItems, increase } = useContext(CartContext)
    const itemInCart = isInCart(product, cartItems)

    return (
        <>
            <div key={id} className='card' className="e-card e-card-horizontal">
                <Card style={{ width: '9rem' }} className="e-card e-card-horizontal">
                    <div className='card-image-container' onClick={() => history.push(`/product/${id}`)}>
                            <Card.Img variant="top" src={image} className='single-card-img' />
                    </div>
                    <Card.Body className='card-info-container'>
                        <div className='card-content-container'>
                        <h6 className='card-info1'>{name}</h6>
                        <Card.Subtitle className='card-info-2'>
                            {text}
                        </Card.Subtitle>
                        <h6 className='card-info-3'>${price} / Price</h6>
                        <div className='card-info-4'>
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
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default withRouter(SingleCard);