import React, { FC, useEffect, useRef, useState } from 'react';
import { CarouselButton } from './CarouselButton/CarouselButton';
import { scrollOnOffset } from './utils';

import './style.css';

interface IProps {
    children: any;
    requireAdditionalData: (flag: boolean) => void;
}

export const Carousel: FC<IProps> = ({ children, requireAdditionalData }) => {
    const ulRef = useRef<HTMLUListElement>(null);
    const isLoadingAdditionalData = useRef<boolean>(false)
    
    const [offset, setOffset] = useState(0)
    const [maxScroll, setMaxScroll] = useState(0)
    const [viewportWidth, setViewportWidth] = useState(0)

    useEffect(()=>{
        if(ulRef.current){
            setMaxScroll(ulRef.current.scrollWidth)
            setViewportWidth(ulRef.current.clientWidth)
        }
    }, [viewportWidth, ulRef.current?.scrollWidth])

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
                requireAdditionalData(isLoadingAdditionalData.current);
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
                {offset > 0 && <CarouselButton direction="left" handlerClick={handlerLeftButtonClick} />}
                {ulRef.current && offset < maxScroll - viewportWidth && <CarouselButton direction="right" handlerClick={handlerRightButtonClick} />}
            </div>
        </>
    );
};
