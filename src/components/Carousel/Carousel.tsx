import React, { FC, useRef, useState, useEffect } from 'react';

import { generateMockData } from './utils';

import './style.css';
import { CarouselItem } from './CarouselItem/CarouselItem';

interface IProps {
    count: number;
    itemsCountPerScroll: number;
    marginLeft: number
}

export const Carousel: FC<IProps> = ({ count, itemsCountPerScroll, marginLeft }) => {
    const ulRef = useRef<HTMLUListElement>(null);

    // set mock(fake) data to carousel as items
    const [data, setData] = useState(generateMockData(0, count))

    const [offset, setOffset] = useState(0);
    const [screenWidth, setScreenWidth] = useState(0);
    const [contentWidth, setContentWidth] = useState(0);

    const itemWidth = Math.ceil((screenWidth - (marginLeft * itemsCountPerScroll + 95 * 2)) / itemsCountPerScroll);

    // Screen resize handler
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Content resize handler
    useEffect(() => {
        if (ulRef.current) {
            setContentWidth(ulRef.current.scrollWidth);
        }
    }, [data, contentWidth]);

    useEffect(() => {
        if (ulRef.current) {

        }
    }, [offset]);

    const handleClickLeft = () => {
        if (ulRef.current) {
            ulRef.current.scrollTo({
                left: ulRef.current.scrollLeft - (screenWidth - 95 * 2),
                behavior: 'smooth',
            });
        }
    };

    const handleClickRight = () => {
        if (ulRef.current) {
            ulRef.current.scrollTo({
                left: ulRef.current.scrollLeft + (screenWidth - 95 * 2),
                behavior: 'smooth',
            });
        }
    };

    const handleScroll = () => {
        if (!ulRef.current) return

        setOffset(ulRef.current.scrollLeft)

        if (ulRef.current.scrollLeft >= contentWidth - screenWidth * 2) {
            setData(prev => {
                return [...prev, ...generateMockData(prev.length, count)]
            })
        }
    };

    return (
        <div className="overflow-container">
            <div className="carousel-wrapper">
                <ul className="carousel-items" ref={ulRef} onScroll={handleScroll}>
                    {data.map((item, index) => (
                        <CarouselItem key={`carousel-item-${index}`} width={itemWidth} item={item} />
                    ))}
                </ul>
            </div>
            <div className="buttons-wrapper">
                {ulRef.current && ulRef.current.scrollLeft > 0 && <button className="carousel__button carousel__button--prev" onClick={handleClickLeft}></button>}
                {ulRef.current && ulRef.current.scrollLeft < Math.floor(contentWidth - screenWidth) && (
                    <button className="carousel__button carousel__button--next" onClick={handleClickRight}></button>
                )}
            </div>
        </div>
    );
};
