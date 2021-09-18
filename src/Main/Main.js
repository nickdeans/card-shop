import TopMain from './TopMain'
import MidMain from './MidMain'
import CardsMain from './CardsMain'
import { useState } from 'react'

const Main = () => {
    return (
        <main>
            <TopMain />
            <MidMain />
            <CardsMain />
        </main>
    );
}

export default Main;
