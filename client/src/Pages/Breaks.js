
import React, { useContext } from 'react';
import Layout from '../Layout/Layout';
// import FeaturedProduct from '../Product/Product';
// import { ProductsContext } from '../context/products-context';
import './breaks.styles.scss';

const Breaks= () => {

//   const { products } = useContext(ProductsContext);
//   const allProducts = products.map(product => (
//     <FeaturedProduct { ...product } key={product.id} />
//   ));

  return (
    <Layout>
      <div className='product-list-container'>
        <h2 className='product-list-title'>Breaks</h2>
      </div>
      <div className='info-container'>
        <div className='info-box'>
            <div className='first-line-huh'> Breaks are an opportunity for you to buy spots in brand new card box openings!</div>
            <p className='details-content'>
                <br />
                1. Join live sports cards retail and hobby box openings without having to purchase a whole box. 
                <br/>
                2. When purchasing a break you will be purchasing one spot in the break and assigned one random team. 
                <br/>
                3. Every card drawn from that team will go to you! Good luck!
            </p>
        </div>
      </div>
    </Layout>
  );
}

export default Breaks;