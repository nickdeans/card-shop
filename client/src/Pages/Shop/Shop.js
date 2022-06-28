
import React, { useContext, useState } from 'react';
import Layout from '../../Body/Layout/Layout';
import FeaturedProduct from '../Product/Product';
import { ProductsContext } from '../../context/products-context';
import './shop.styles.scss';
import Button from 'react-bootstrap/Button'

const Shop = () => {
  const { filteredProds, filterItems } = useContext(ProductsContext);
  const allProducts = filteredProds.map(product => (
    <FeaturedProduct { ...product } key={product.id} />
  ));
  // const cats = new Set(filteredProds.map(product => product.category))
  // use spread operator and add cats to allCategories array to make dynamic
  const allCategories =  ['All', 'Baseball', "Football", "Basketball"]
  const [categories] = useState(allCategories)
  
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