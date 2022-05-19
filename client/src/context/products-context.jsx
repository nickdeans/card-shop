import React, { createContext, useState, useEffect } from 'react';
import data from '../cardData';
import axios from 'axios'

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const filterItems = (category) => {
        if(category === 'All') {
            setProducts(data);
            return
        }
        const newItems = data.filter(product => product.category === category);
        setProducts(newItems)
    }

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/products')
                console.log(res)
                setProducts(res.data)
            } catch(err) {}
        }
        getProducts()
    }, [])

    return (
        <ProductsContext.Provider value={{ products, filterItems }} >
                {
                    children
                }
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;