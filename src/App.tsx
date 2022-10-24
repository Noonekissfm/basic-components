import React, { useState } from 'react';
import './App.css';
import { Carousel } from './components/Carousel/Carousel';
import { CarouselItem } from './components/Carousel/CarouselItem/CarouselItem';
import { clickFn, generateMockData } from './components/Carousel/utils';

import { Rail } from './components/Rail/Rail';

function App() {

    const [mockData, setMockData] = useState(generateMockData(0, 18))

    const generateAdditionalData = (flag: boolean) => {
        if(flag) return
        flag = true
        setMockData(prev => {
            return [...prev, ...generateMockData(prev.length, 6)]
        })
        flag = false
    }

    return (
        <div className="App">
            <Rail width={100} height={200}>
                <Carousel requireAdditionalData={generateAdditionalData}>
                    {mockData.map((item, i) => <CarouselItem key={`CarouselItem-${i}`} item={item} handlerClick={clickFn} marginLeft={20} cardPerPage={6} />)}
                    {/* {items.map(()=> <AppCheckbox checked={false} onAction={clickFn} size={Size.LARGE}/>)} */}
                </Carousel>
            </Rail>
        </div>
    );
}

export default App;
