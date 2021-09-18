// import TopMain from './TopMain'
// import MidMain from './MidMain'
// import CardsMain from './CardsMain'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const Carousel = (props) => {

    const [items, setItems] = useState(itemss);
    const [active, setActive] = useState(props.active);
    const [direction, setDirection] = useState('');

const generateItems = () => {
        let items = []
        let level
        console.log(active)
        for (let i = active - 2; i < active + 3; i++) {
            let index = i
            if (i < 0) {
                index = items.length + i
            } else if (i >= items.length) {
                index = i % items.length
            }
            level = active - i
            items.push(<Item id={items[index]} level={level} />)
        }
        return items
    }

const moveLeft = () => {
        var newActive = active
        newActive--
        setActive(newActive < 0 ? items.length - 1 : newActive)
        setDirection('left')
        setItems([)
    }

const moveRight = () => {
        var newActive = active
        setActive((newActive + 1) % items.length);
        setDirection('right')
    }
        return (
            <div id="carousel" className="noselect">
                <div className="arrow arrow-left" onClick={moveLeft}><i className="fi-arrow-left"></i></div>
                <CSSTransition
                    transitionName={direction}>
                        <div key="transition-group-content">
                        {generateItems()}
                        </div>
                </CSSTransition>
                <div className="arrow arrow-right" onClick={moveRight}><i className="fi-arrow-right"></i></div>
            </div>
        )
}

const Item = (props) => {

    const [level, setLevel] = useState(props.level)

        const className = 'item level' + level
        return (
            <div className={className}>
                {props.id}
            </div>
        )
}

const itemss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



const Main = () => {
    return (
        <main>
            <Carousel items={itemss} active={0} />
            {/* <TopMain />
        <MidMain />
        <CardsMain /> */}
        </main>
    );
}

export default Main;
