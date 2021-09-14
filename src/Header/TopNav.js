import instaLogo from '../images/insta.svg'
import twitterLogo from '../images/twitter.svg'
import youtubeLogo from '../images/youtube.svg'
import NavBar from 'react-bootstrap/Navbar'
import DropDownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/js/dist/dropdown'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FaLock, FaShoppingCart, FaTty } from 'react-icons/fa'

// <NavDropdown title='Contact' className='icon-logos' >

//     <NavDropdown.item disabled>
//         Phone
//     </NavDropdown.item>

// </NavDropdown>
const TopNav = () => {
    return (
        <>
            <div style={{ float: 'right', backgroundColor: 'black' }}>
                <NavBar>
                    <h6 className='nav-header'>#1 Card Shop out there!</h6>
                    <Dropdown>
                        <Dropdown.Toggle style={{backgroundColor: 'transparent', borderBlockColor: 'transparent', border: 'transparent', marginRight: '-.60rem'}} >
                            <FaTty className='icon-logos'/>
                            Contact
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ backgroundColor: 'black'}}>
                            <Dropdown.Item style={{color: 'white'}} href="">Phone: 808-223-4355</Dropdown.Item>
                            <Dropdown.Item style={{color: 'white'}}  href="#/action-2">Email: Nickabramowicz@gmail.com</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <NavBar.Brand style={{ color: 'white' }}>
                        <FaShoppingCart className='icon-logos' />
                        Cart
                        <FaLock className='icon-logos' />
                        Login
                    </NavBar.Brand>
                    <NavBar.Brand >
                        <img src={instaLogo} alt='instaLogo' width="30" height="30" className="social-icon" />
                        <img src={twitterLogo} alt='twitterLogo' width="30" height="30" className="social-icon" />
                        <img src={youtubeLogo} alt='youtubeLogo' width="30" height="30" className="social-icon" />
                    </NavBar.Brand>
                </NavBar>
            </div>
        </>
    );
}

export default TopNav;