import instaLogo from '../images/insta.svg'
import twitterLogo from '../images/twitter.svg'
import youtubeLogo from '../images/youtube.svg'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/js/dist/dropdown'
import { FaLock, FaShoppingCart, FaTty } from 'react-icons/fa'


const TopNav = () => {
    return (
        <>
            <div style={{ backgroundColor: 'black', height: '3rem' }}>
                <Navbar>
                    <Nav className="ms-auto">
                    <h6 className='nav-header'>#1 Card Shop out there!</h6>
                    <Dropdown>
                        <Dropdown.Toggle style={{backgroundColor: 'transparent', borderBlockColor: 'transparent', border: 'transparent', marginRight: '-.70rem', fontSize: '1.25rem' }} className='top-nav-text'>
                            <FaTty className='icon-logos'/>
                            Contact
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='dropdown-menu'>
                            <Dropdown.Item style={{color: 'white'}} href="" >Phone: 808-223-4355</Dropdown.Item>
                            <Dropdown.Item style={{color: 'white'}}  href="#/action-2">Email: Nickabramowicz@gmail.com</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Navbar.Brand style={{ color: 'white' }} className='top-nav-text'>
                        <div>
                        <FaShoppingCart className='icon-logos' />
                        <span className='cart-count'>5</span>
                        Cart

                        </div>
                        <FaLock className='icon-logos' />
                        Login
                    </Navbar.Brand>
                    <Navbar.Brand >
                        <img src={instaLogo} alt='instaLogo' width="25" height="25" className="social-icon" style={{marginLeft: '1rem'}} />
                        <img src={twitterLogo} alt='twitterLogo' width="25" height="25" className="social-icon" />
                        <img src={youtubeLogo} alt='youtubeLogo' width="25" height="25" className="social-icon" style={{marginRight: '1.5rem'}}/>
                    </Navbar.Brand>
                    </Nav>
                </Navbar>
            </div>
        </>
    );
}

export default TopNav;