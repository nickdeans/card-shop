import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/js/dist/dropdown'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import logo from '../images/logo8.png'
import './header.scss'

const BottomNav = () => {
    return (
        <Navbar className='bottom-nav'>
            <div className='logoContainer'>
                <img src={logo} alt='logo' className='logo' />
                <div className='logoHeader'>
                    Sports Cards
                </div>
            </div>
            <Navbar.Collapse>
                <Nav className="ms-auto">
                    {/* <NavDropdown title="Shop" id="basic-nav-dropdown" className='bottom-nav-buttons'>
                        <NavDropdown.Item href="#action/3.1" className='shop-dropdown-text' >Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" className='shop-dropdown-text'>Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" className='shop-dropdown-text'>Something</NavDropdown.Item>
                        <NavDropdown.Divider className='shop-dropdown-divider'/>
                        <NavDropdown.Item href="#action/3.4" className='shop-dropdown-text'>Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                    <Nav.Link href="/" className='bottom-nav-buttons'>Home</Nav.Link>
                    <Nav.Link href="/shop" className='bottom-nav-buttons'>Shop</Nav.Link>
                    <Nav.Link href="#home" className='bottom-nav-buttons'>Breaks</Nav.Link>
                    <Nav.Link href="#link" className='bottom-nav-buttons'>Release Schedule</Nav.Link>
                    <Nav.Link href="#link" className='bottom-nav-buttons'>About</Nav.Link>
                    <Form className="d-flex" id='search-bar'>
                        <FormControl
                            size='md'
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" className='bottom-nav-buttons'>Search</Button>
                    </Form>                    </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default BottomNav;