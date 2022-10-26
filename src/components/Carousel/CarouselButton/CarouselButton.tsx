import React, { FC } from "react";
import './style.css'

interface IProps {
    direction: string;
    onClick: () => void;
}

export const CarouselButton: FC<IProps> = ({direction, onClick}) => {

    const rootClasses = ['carousel__button', direction === 'left'? 'carousel__button--left' : 'carousel__button--right']

    // TODO 
    // Refactor code with clsx package

    return (
        <button className={rootClasses.join(' ')} onClick={onClick}/>
    )
}