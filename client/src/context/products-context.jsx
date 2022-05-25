import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

// Local Data file, (using API data from MongoDB currently)
import data from '../cardData';

// for local host development http://localhost:5000/api/products
// Use filteredProds for api data

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState(data);
    const [filteredProds, setFilteredProds] = useState([])
 
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/products')
                setProducts(res.data)
                // setFilteredProds(res.data)
            } catch(err) {}
        }
        getProducts()
    }, [])
    
    const filterItems = (category) => {
        if(category === 'All') {
            // setFilteredProds(products);
            setProducts(data)
            return
        }
        const newItems = data.filter(product => product.category === category);
        // setFilteredProds(newItems)
        setProducts(newItems)
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