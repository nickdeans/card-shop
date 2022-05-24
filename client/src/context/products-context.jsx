import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

// Local Data file, (using API data from MongoDB currently)
// import data from '../cardData';

// for local host development http://localhost:5000/api/products

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [filteredProds, setFilteredProds] = useState([])
 
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get('https://nd-sports-cards.herokuapp.com')
                setProducts(res.data)
                setFilteredProds(res.data)
            } catch(err) {}
        }
        getProducts()
    }, [])
    
    const filterItems = (category) => {
        if(category === 'All') {
            setFilteredProds(products);
            return
        }
        const newItems = products.filter(product => product.category === category);
        setFilteredProds(newItems)
    }

    return (
        <ProductsContext.Provider value={{ products, filteredProds, filterItems }} >
                {
                    children
                }
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;