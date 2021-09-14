import instaLogo from '../images/insta.svg'
import twitterLogo from '../images/twitter.svg'
import youtubeLogo from '../images/youtube.svg'
import NavBar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const TopNav = () => {
    return (
    <>
        <div style={{ float: 'right' }}>
            <NavBar>
                    <NavBar.Brand >
                        <img src={instaLogo} alt='instaLogo'   width="30" height="30" className=""/>
                    </NavBar.Brand>
                    <NavBar.Brand>
                        <img src={twitterLogo} alt='twitterLogo'   width="30" height="30" className=""/>
                    </NavBar.Brand>
                    <NavBar.Brand>
                        <img src={youtubeLogo} alt='youtubeLogo'   width="30" height="30" className=""/>
                    </NavBar.Brand>
            </NavBar>
        </div>
    </>
    );
  }
  
  export default TopNav;