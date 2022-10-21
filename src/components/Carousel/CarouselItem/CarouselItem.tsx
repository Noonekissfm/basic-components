import React, { FC, } from 'react';
import './style.css'

interface IProps {
    width: number;
    item: any;
}

export const CarouselItem: FC<IProps> = ({ width, item}) => {
    return (
        <li className="carousel-item" style={{ minWidth: `${width}px` }}>
            {item}
        </li>
    );
};
