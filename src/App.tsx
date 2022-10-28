import React from 'react';
import './App.css';
import { VideoCard } from './components/Cards/VideoCard/VideoCard';
import { Carousel } from './components/Carousel/Carousel';

import { Rail } from './components/Rail/Rail';
import { Size } from './types/Sizes';

import { cardData } from './utils/utils';

export const App = () => {
    return (
        <div className="App">
            <Rail width={Size.FULL_SCREEN_WIDTH} height={600}>
                <Carousel onScrollEnd={() => console.log('click')}>
                    {cardData.map((item, i) => (
                        <VideoCard key={`VideoCard-${i}`} item={item} />
                    ))}
                </Carousel>
            </Rail>
        </div>
    );
}
