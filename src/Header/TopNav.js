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
            <div style={{ backgroundColor: 'black' }}>
                <Navbar>
                    <Nav className="ms-auto">
                    <h6 className='nav-header'>#1 Card Shop out there!</h6>
                    <Dropdown>
                        <Dropdown.Toggle style={{backgroundColor: 'transparent', borderBlockColor: 'transparent', border: 'transparent', marginRight: '-.70rem', fontSize: '1.25rem', marginLeft: '-.5rem'}} >
                            <FaTty className='icon-logos'/>
                            Contact
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='dropdown-menu'>
                            <Dropdown.Item style={{color: 'white'}} href="" >Phone: 808-223-4355</Dropdown.Item>
                            <Dropdown.Item style={{color: 'white'}}  href="#/action-2">Email: Nickabramowicz@gmail.com</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Navbar.Brand style={{ color: 'white' }}>
                        <FaShoppingCart className='icon-logos' />
                        Cart
                        <FaLock className='icon-logos' />
                        Login
                    </Navbar.Brand>
                    <Navbar.Brand >
                        <img src={instaLogo} alt='instaLogo' width="30" height="30" className="social-icon" style={{marginLeft: '1rem'}} />
                        <img src={twitterLogo} alt='twitterLogo' width="30" height="30" className="social-icon" />
                        <img src={youtubeLogo} alt='youtubeLogo' width="30" height="30" className="social-icon" />
                    </Navbar.Brand>
                    </Nav>
                </Navbar>
            </div>
        </>
    );
}

export default TopNav;