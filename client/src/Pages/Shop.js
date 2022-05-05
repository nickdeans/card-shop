
import React, { useContext, useState } from 'react';
import Layout from '../Layout/Layout';
import FeaturedProduct from '../Product/Product';
import { ProductsContext } from '../context/products-context';
import './shop.styles.scss';

const Shop = () => {
  const { products, filterItems } = useContext(ProductsContext);
  const allProducts = products.map(product => (
    <FeaturedProduct { ...product } key={product.id} />
  ));
  const allCategories =  ['all', ...new Set(products.map(product => product.category))]

  const [categories, setCategories] = useState(allCategories)

  return (
    <Layout>
      <div className='product-list-container'>
        <h2 className='product-list-title'>Shop</h2>
        {
          categories.map((category, index) => {
            return (
            <button key={index} onClick={() => filterItems((category))}>{category}</button>
            )
          })
        }
        <p className='sub-header'>(Click Image for Close-up!)</p>
        <div className='product-list'>
          {
            allProducts
          }
        </div>
      </div>
    </Layout>
  );
}

export default Shop;