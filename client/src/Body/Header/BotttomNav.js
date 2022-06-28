import 'bootstrap/js/dist/dropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import logo from '../images/logo8.png'
import './header.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaBars } from "react-icons/fa";


const BottomNav = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar className='bottom-nav'>
                <Link to="/" style={{color: 'black'}} >
                    <div className='logoContainer'>
                            <img src={logo} alt='logo' className='logo' />
                            <div className='logoHeader'>
                                Sports Cards
                            </div>
                    </div>
                </Link>
                    <FaBars className='burger-menu' />
            <Navbar.Collapse>
                <Nav className="ms-auto hello">
                    <Nav.Link href="/" className='bottom-nav-buttons'>Home</Nav.Link>
                    <Nav.Link href="/shop" className='bottom-nav-buttons'>Shop</Nav.Link>
                    <Nav.Link href="/breaks" className='bottom-nav-buttons'>Breaks</Nav.Link>
                    <Nav.Link href="/releases" className='bottom-nav-buttons'>Releases</Nav.Link>
                    <Nav.Link href="/about" className='bottom-nav-buttons'>About</Nav.Link>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Page in Progress!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Check out our Shop Page in the meantime to purchase your favorite sports cards!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Form className="d-flex" id='search-bar'>
                        <FormControl
                            size='md'
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" className='bottom-nav-buttons' onClick={handleShow}>Search</Button>
                    </Form>                    </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default BottomNav;