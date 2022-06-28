import { useState, useContext } from 'react';
// import brady from '../images/brady.jpeg'
import ItemsCarousel from 'react-items-carousel';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import React from 'react';

import { ProductsContext } from '../context/products-context';
import SingleCard from './SingleCard'

const CardsMain = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    const { products } = useContext(ProductsContext);    
    const allProducts = products.map(product => (
        <SingleCard { ...product } key={product.id} />
        ));

    const [count, setCount] = useState(5)
    
    React.useEffect(() => {

    function handleResize() {
        // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        if(window.innerWidth > 1315) {
            setCount(5);
        } else if(window.innerWidth < 1315 && window.innerWidth > 1075) {
            setCount(4);
        } else if(window.innerWidth < 1075 && window.innerWidth > 935) {
            setCount(3);
        } else if(window.innerWidth < 935) {
            setCount(2);
        } 
    }

    window.addEventListener('load', handleResize)
    window.addEventListener('resize', handleResize)
  })

    return (
        <>
            <div style={{ padding: `0 ${chevronWidth}px` }} className='carousel-container'>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={count}
                    gutter={20}
                    leftChevron={<button><FaAngleLeft /></button>}
                    rightChevron={<button><FaAngleRight /></button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                    infiniteLoop={true}
                >
                    {
                        allProducts
                    }
                </ItemsCarousel>
            </div>
        </>
    )
}

export default CardsMain;