import TopMain from './TopMain'
import MidMain from './MidMain'
import CardsMain from './CardsMain'
import { useState } from 'react'
import BottomMain from './BottomMain'
import NewProduct from './NewProduct'


const Main = () => {
    return (
        <main>
            <TopMain />
            <MidMain />
            <CardsMain />
            <NewProduct />
            <BottomMain />
        </main>
    );
}

export default Main;
