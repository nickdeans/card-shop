import instaLogo from '../images/insta.svg'
import twitterLogo from '../images/twitter.svg'
import youtubeLogo from '../images/youtube.svg'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Modal from 'react-bootstrap/Modal'
import { CartContext } from '../context/cart-context';
import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom'
import 'bootstrap/js/dist/dropdown'
import './header.scss'
import { FaLock, FaShoppingCart, FaTty } from 'react-icons/fa'


const TopNav = ({ history }) => {
    const { itemCount, cartItems } = useContext(CartContext)
    console.log('CartItems:', cartItems);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='top-nav-container'>
            <div style={{ backgroundColor: 'black', height: '3rem' }}>
                <Navbar>
                    <Nav className="ms-auto">
                        <h6 className='nav-header'>#1 Card Shop out there!</h6>
                        <Dropdown>
                            <Dropdown.Toggle style={{ backgroundColor: 'transparent', borderBlockColor: 'transparent', border: 'transparent', marginRight: '-.70rem', fontSize: '1.25rem' }} className='top-nav-text'>
                                <FaTty className='icon-logos' />
                                Contact
                        </Dropdown.Toggle>
                            <Dropdown.Menu className='dropdown-menu'>
                                <Dropdown.Item style={{ color: 'white' }} href="" >Phone: 808-223-4355</Dropdown.Item>
                                <Dropdown.Item style={{ color: 'white' }} href="#/action-2">Email: Nickabramowicz@gmail.com</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Navbar.Brand style={{ color: 'white' }} className='top-nav-text' onClick={() => history.push('/cart')}>
                            <div class='cart-nav-styling'>
                                <FaShoppingCart className='icon-logos' />
                                {
                                    itemCount > 0 ? <span className='cart-count'>{itemCount}</span> : null
                                }
                            Cart
                        </div>
                        </Navbar.Brand>
                        <Navbar.Brand style={{ color: 'white' }}>
                            <div onClick={handleShow} class='cart-nav-styling'>
                                <FaLock className='icon-logos' />
                            Login
                            </div>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Feature in Progress!</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Check back soon for the ability to log-in to your account and receive special perks!</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Navbar.Brand>
                        <Navbar.Brand >
                            <a href='https://www.instagram.com/ndsportscards2/' target="_blank" rel="noopener noreferrer">
                                <img src={instaLogo} alt='instaLogo' width="25" height="25" className="social-icon" style={{ marginLeft: '1rem' }} />
                            </a>
                            <a href='https://twitter.com/NDsportscards' target="_blank" rel="noopener noreferrer">
                                <img src={twitterLogo} alt='twitterLogo' width="25" height="25" className="social-icon" />
                            </a>
                            <a href='https://www.youtube.com/channel/UCeoD7qAczK1oiKPQaXmmc-Q' target="_blank" rel="noopener noreferrer">
                                <img src={youtubeLogo} alt='youtubeLogo' width="25" height="25" className="social-icon" style={{ marginRight: '1.5rem' }} />
                            </a>
                        </Navbar.Brand>
                    </Nav>
                </Navbar>
            </div>
        </div>
    );
}

export default withRouter(TopNav);