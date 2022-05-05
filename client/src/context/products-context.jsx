import React, { createContext, useState } from 'react';
import data from '../cardData';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState(data);

    const filterItems = (category) => {
        if(category === 'all') {
            setProducts(data);
            return
        }
        const newItems = data.filter(product => product.category === category);
        setProducts(newItems)
    }

    return (
        <ProductsContext.Provider value={{ products, filterItems }} >
                {
                    children
                }
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;