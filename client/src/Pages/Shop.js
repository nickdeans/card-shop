
import React, { useContext, useState } from 'react';
import Layout from '../Layout/Layout';
import FeaturedProduct from '../Product/Product';
import { ProductsContext } from '../context/products-context';
import './shop.styles.scss';
import Button from 'react-bootstrap/Button'

const Shop = () => {
  const { products, filterItems } = useContext(ProductsContext);
  const allProducts = products.map(product => (
    <FeaturedProduct { ...product } key={product.id} />
  ));
  const allCategories =  ['All', ...new Set(products.map(product => product.category))]

  const [categories, setCategories] = useState(allCategories)

  return (
    <Layout>
      <div className='product-list-container'>
        <h2 className='product-list-title'>Shop</h2>
        <div className='category-btns-container'>
          {
            categories.map((category, index) => {
              return (
              <Button variant="dark" key={index} onClick={() => filterItems((category))}>{category}</Button>
              )
            })
          }
        </div>
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