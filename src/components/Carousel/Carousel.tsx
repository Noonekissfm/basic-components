import React, { FC, useRef, useState, useEffect } from 'react';

import './style.css';
import { CarouselItem } from './CarouselItem/CarouselItem';
import { scrollOnOffset } from './utils';

interface IProps {
    itemsCountPerScroll: number;
    marginLeft: number;
    leftAndRightSidesMargin: number;
    mockData: any[];
    requestNewData: Function;
}

export const Carousel: FC<IProps> = ({ mockData, itemsCountPerScroll, marginLeft, requestNewData, leftAndRightSidesMargin }) => {
    const ulRef = useRef<HTMLUListElement>(null);
    const requestDataFlag = useRef(false);

    const [screenWidth, setScreenWidth] = useState(0);
    const [contentWidth, setContentWidth] = useState(0);

    const itemWidth = Math.ceil((screenWidth - (marginLeft * itemsCountPerScroll + (leftAndRightSidesMargin * 2 - marginLeft))) / itemsCountPerScroll);

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
    }, [mockData, contentWidth]);



    const handleClickLeft = () => {
        if (ulRef.current) {
            scrollOnOffset(ulRef.current, ulRef.current.scrollLeft - (screenWidth - 95 * 2))
        }
    };

    const handleClickRight = () => {
        if (ulRef.current) {
            scrollOnOffset(ulRef.current, ulRef.current.scrollLeft + (screenWidth - 95 * 2))
        }
    };

    const handleScroll = () => {
        if (!ulRef.current) return;

        if (ulRef.current.scrollLeft >= contentWidth - screenWidth * 2 && !requestDataFlag.current) {
            requestNewData(requestDataFlag.current);
        }
    };

    return (
        <div className="overflow-container">
            <div className="carousel-wrapper">
                <ul className="carousel-items" ref={ulRef} onScroll={handleScroll}>
                    {mockData.map((item, index) => (
                        <CarouselItem key={`carousel-item-${index}`} width={itemWidth} item={item}/>
                    ))}
                </ul>
            </div>
            <div className="buttons-wrapper">
                {ulRef.current && ulRef.current.scrollLeft > 0 && (
                    <button className="carousel__button carousel__button--prev" onClick={handleClickLeft}></button>
                )}
                {ulRef.current && ulRef.current.scrollLeft < Math.floor(contentWidth - screenWidth) && (
                    <button className="carousel__button carousel__button--next" onClick={handleClickRight}></button>
                )}
            </div>
        </div>
    );
};
