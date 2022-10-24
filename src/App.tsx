import React, { useState } from 'react';
import './App.css';
import { Carousel } from './components/Carousel/Carousel';
import { CarouselItem } from './components/Carousel/CarouselItem/CarouselItem';
import { clickFn, generateMockData } from './components/Carousel/utils';

import { Rail } from './components/Rail/Rail';

function App() {

    const [mockData, setMockData] = useState(generateMockData(0, 18))

    const generateAdditionalData = () => {
        setMockData(prev => {
            return [...prev, ...generateMockData(prev.length, 6)]
        })
    }

    return (
        <div className="App">
            <Rail width={100} height={200}>
                <Carousel onScrollEnd={generateAdditionalData}>
                    {mockData.map((item, i) => <CarouselItem key={`CarouselItem-${i}`} item={item} onClick={clickFn} marginLeft={20} cardPerPage={6} />)}
                </Carousel>
            </Rail>
        </div>
    );
}

export default App;
