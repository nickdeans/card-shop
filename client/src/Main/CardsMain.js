import { useState, useContext } from 'react';
// import brady from '../images/brady.jpeg'
import ItemsCarousel from 'react-items-carousel';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import { ProductsContext } from '../context/products-context';
import SingleCard from './SingleCard'

const CardsMain = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    const { products } = useContext(ProductsContext);    
    const allProducts = products.map(product => (
        <SingleCard { ...product } key={product.id} />
      ));

    return (
        <>
            <div style={{ padding: `0 ${chevronWidth}px` }} className='carousel-container'>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={5}
                    gutter={20}
                    leftChevron={<button><FaAngleLeft /></button>}
                    rightChevron={<button><FaAngleRight /></button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                    infiniteLoop='true'
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