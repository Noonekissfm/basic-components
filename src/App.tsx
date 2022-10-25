import React, { useState } from 'react';
import './App.css';
import { AppCheckbox } from './components/AppCheckbox/AppCheckbox';
import { Carousel } from './components/Carousel/Carousel';
import { CarouselItem } from './components/Carousel/CarouselItem/CarouselItem';
import { handleClick, generateMockData } from './components/Carousel/utils';

import { Rail } from './components/Rail/Rail';
import { Size } from './types/Sizes';

function App() {

    const [mockData, setMockData] = useState(generateMockData(0, 18))

    const generateAdditionalData = () => {
        setMockData(prev => {
            return [...prev, ...generateMockData(prev.length, 6)]
        })
    }

    return (
        <div className="App">
            
            <Rail width={Size.FULL_SCREEN_WIDTH} height={200}>
                <Carousel onScrollEnd={generateAdditionalData}>
                    {mockData.map((item, i) => <CarouselItem key={`CarouselItem-${i}`} item={item} onClick={handleClick} marginLeft={20} cardPerPage={6} />)}
                </Carousel>
            </Rail>

            <Rail width={Size.FULL_SCREEN_WIDTH} height={200}>
                <Carousel onScrollEnd={generateAdditionalData}>
                    {mockData.map((_, i) => <AppCheckbox key={`AppCheckBox--${i}`} checked={false} size={Size.LARGE} onChange={handleClick} />)}
                </Carousel>
            </Rail>
        </div>
    );
}

export default App;
