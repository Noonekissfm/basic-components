import React, { FC, useEffect, useState } from 'react';
import './style.css';

interface IProps {
    item: { title: string; id: number; subtitle: string; description: string };
    onClick: () => void;
    cardPerPage: number;
    marginLeft: number;
}

export const CarouselItem: FC<IProps> = ({ item, onClick, cardPerPage, marginLeft }) => {
    const { title, subtitle, description, id } = item;

    const [screenWidth, setScreenWidth] = useState(0);

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

    return (
        <li className="carousel-item" style={{ minWidth: `${(screenWidth / cardPerPage - marginLeft)}px`, marginLeft: `${marginLeft}px` }}>
            <div className="carousel-item__header">
                <div className='carousel-item__header--left'>
                    <span className="carousel-item__title">{title}</span>
                    <span className="carousel-item__subtitle">{subtitle}</span>
                </div>
                <div className='carousel-item__header--right'>
                    <span>{id}</span>
                </div>
            </div>
            <div className="carousel-item__footer">
                <div className="carousel-item__description">
                    <span>{description}</span>
                </div>
                <button className="carousel-item__button" onClick={onClick}>
                    Click
                </button>
            </div>
        </li>
    );
};
