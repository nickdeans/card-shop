import Card from 'react-bootstrap/Card'
import boxHoops from '../images/hoopsbox.png'
import React, { useContext } from 'react';
import Layout from '../Layout/Layout';
import './releases.styles.scss';

const Releases = () => {

  return (
    <div className="background-color-break-page">
    <Layout>
    <div className='product-list-container'>
    <h2 className='product-list-title'>Releases</h2>
    </div>
    <div className='breaks-container'>   
      <div className='card-container2'>
            <Card className='product-container2' style={{position: "relative",width: "50%",display: "flex",top: "0rem"}}>
                <Card.Img variant="top" src={boxHoops} className='box-hoops' />
                <Card.Body className='product-info'>
                    <h1>2022 NBA Hoops Box</h1>
                    <h6 className="release-date-heading">Release Date: January 21, 2022</h6>
                    <Card.Text style={{display: "flex", textAlign: "left"}}>
                    NBA Hoops Basketball kicks off the 75th NBA season with your chance to collect the first rookie cards of the 2021 NBA Draft in their NBA jerseys!
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        <div className='info-container'>
        <div className='info-box'>
            <h1 className='release-header' >Release Dates</h1>
            <div className='details-content-releases'>
                <table className="table">
                    <tr className="table-headings">
                        <th>DATES</th>
                        <th>NAME</th>
                        <th>SPORT</th>
                    </tr>
                    <tr>
                        <td>Jan 18th, 2022</td>
                        <td>2022 Bowman Sapphire Baseball</td>
                        <td>Baseball</td>
                    </tr>
                    <tr>
                        <td>Jan 21st, 2022</td>
                        <td>2022 Leaf Flash Baseball</td>
                        <td>Baseball</td>
                    </tr>
                    <tr>
                        <td>Jan 25th, 2022</td>
                        <td>2022 Panini Flawless Basketball</td>
                        <td>Basketball</td>
                    </tr>
                    <tr>
                        <td>Jan 29th, 2022</td>
                        <td>2022 Panini Playoff Football</td>
                        <td>Football</td>
                    </tr>
                    <tr>
                        <td>Feb 1st, 2022</td>
                        <td>2022 Onyx Vintage College Football</td>
                        <td>Football</td>
                    </tr>
                    <tr>
                        <td>Feb 7th, 2022</td>
                        <td>2022 Topps Formula 1 Racing</td>
                        <td>Racing</td>
                    </tr>
                    <tr>
                        <td>Feb 13th, 2022</td>
                        <td>2022 Pro Set Power Football</td>
                        <td>Football</td>
                    </tr>
                    <tr>
                        <td>Feb 18th, 2022</td>
                        <td>2022 Donruss Basketball</td>
                        <td>Basketball</td>
                    </tr>
                    <tr>
                        <td>Feb 26th, 2022</td>
                        <td>2022 Bowman Heritage Baseball</td>
                        <td>Baseball</td>
                    </tr>
                    <tr>
                        <td>Mar 1st, 2022</td>
                        <td>2022 Leaf Valiant Football</td>
                        <td>Football</td>
                    </tr>
                </table>
            </div>
        </div>
        </div>                     
    </div>
    </Layout>
    </div>
  );
}

export default Releases;