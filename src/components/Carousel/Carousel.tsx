import React, { FC, useEffect, useRef, useState, PropsWithChildren } from 'react';
import { CarouselButton } from './CarouselButton/CarouselButton';
import { scrollOnOffset } from './utils';

import './style.css';
import { Directions } from '../../types/Directions';

interface IProps {
    onScrollEnd: () => void;
}

export const Carousel: FC<PropsWithChildren<IProps>> = ({ children, onScrollEnd }) => {
    const ulRef = useRef<HTMLUListElement>(null);
    const isLoadingAdditionalData = useRef<boolean>(false)
    
    const [offset, setOffset] = useState(0)
    const [maxScroll, setMaxScroll] = useState(0)
    const [viewportWidth, setViewportWidth] = useState(0)

    let canScrollLeft = offset > 0;
    let canScrollRight = ulRef.current && offset < Math.ceil(maxScroll - viewportWidth);

    useEffect(()=>{
        if(ulRef.current){
            setMaxScroll(ulRef.current.scrollWidth)
            setViewportWidth(ulRef.current.clientWidth)
        }
    }, [viewportWidth, ulRef.current?.scrollWidth])

    useEffect(()=>{
        if(ulRef.current) {
          isLoadingAdditionalData.current = false;  
        }
    }, [ulRef.current?.scrollWidth])

    const handlerLeftButtonClick = () => {
        if(!ulRef.current) return
        scrollOnOffset(ulRef.current, ulRef.current.scrollLeft - viewportWidth)
    };
    const handlerRightButtonClick = () => {
        if(!ulRef.current) return
        scrollOnOffset(ulRef.current, ulRef.current.scrollLeft + viewportWidth)
    };

    const handlerScroll = () => {
        if (!ulRef.current) return
        setOffset(ulRef.current.scrollLeft)

        if (((maxScroll - viewportWidth) - offset) < viewportWidth) {

            if(!isLoadingAdditionalData.current) {
                isLoadingAdditionalData.current = true;
                onScrollEnd();
                setMaxScroll(ulRef.current.scrollWidth);
            }
        }
    }




    return (
        <>
            <ul ref={ulRef} className="carousel-items" onScroll={handlerScroll}>
                {children}
            </ul>
            <div className="buttons-wrapper">
                {canScrollLeft && <CarouselButton direction={Directions.LEFT} onClick={handlerLeftButtonClick} />}
                {canScrollRight && <CarouselButton direction={Directions.RIGHT} onClick={handlerRightButtonClick} />}
            </div>
        </>
    );
};
