import React, { FC, useRef, useState, useEffect, useMemo } from 'react';

import { generateMockData } from './utils';

import './style.css';
import { CarouselItem } from './CarouselItem/CarouselItem';

interface IProps {
    count: number;
}

export const Carousel: FC<IProps> = ({ count }) => {
    const ulRef = useRef<HTMLUListElement>(null);

    // set mock(fake) data to carousel as items
    let mock = useMemo(() => generateMockData(count), [count]);

    const [offset, setOffset] = useState(0);
    const [screenWidth, setScreenWidth] = useState(0);
    const [contentWidth, setContentWidth] = useState(0);
    const [shiftToRight, setShiftToRight] = useState(0);
    const [requestData, setRequestData] = useState(false);
    const [loadingData, setLoadingData] = useState(false);

    const itemWidth = Math.ceil((screenWidth - (20 * 5 + 95 * 2)) / 5);

    // Request additional data for carousel

    useEffect(() => {
        if (requestData && !loadingData) {
            setLoadingData(true);
            mock.push(...generateMockData(15));
            setTimeout(() => {
                setLoadingData(false);
                setRequestData(false);
            }, 3000);
        }
    }, [requestData, contentWidth, mock, loadingData]);

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
    }, [mock, screenWidth, contentWidth, shiftToRight]);

    useEffect(() => {
        if (ulRef.current) {
            ulRef.current.scrollTo({
                left: offset,
                behavior: 'smooth',
            });
        }
    }, [offset]);

    const handleClickRight = () => {
        setOffset((currentOffset) => {
            currentOffset = shiftToRight;
            return currentOffset + (screenWidth - 95 * 2);
        });
    };

    const handleClickLeft = () => {
        setOffset((currentOffset) => {
            currentOffset = shiftToRight;
            return currentOffset - (screenWidth - 95 * 2);
        });
    };

    const handleScroll = () => {
        if (ulRef.current) {
            setShiftToRight(Math.ceil(ulRef.current.scrollLeft));
        }
        if (shiftToRight >= contentWidth - screenWidth * 2) {
            setRequestData(true);
        }
    };

    return (
        <div className="overflow-container">
            <div className="carousel-wrapper">
                <ul className="carousel-items" ref={ulRef} onScroll={handleScroll}>
                    {mock.map((item, index) => (
                        <CarouselItem key={`carousel-item-${index}`} width={itemWidth} item={item} />
                    ))}
                </ul>
            </div>
            <div className="buttons-wrapper">
                {shiftToRight > 0 && <button className="carousel__button carousel__button--prev" onClick={handleClickLeft}></button>}
                {shiftToRight < Math.floor(contentWidth - screenWidth) && (
                    <button className="carousel__button carousel__button--next" onClick={handleClickRight}></button>
                )}
            </div>
        </div>
    );
};
