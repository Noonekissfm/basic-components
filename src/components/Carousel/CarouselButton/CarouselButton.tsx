import React, { FC } from "react";
import './style.css'

interface IProps {
    direction: string;
    onClick: () => void;
}

export const CarouselButton: FC<IProps> = ({direction, onClick}) => {

    const rootClasses = ['carousel__button', direction === 'left'? 'carousel__button--left' : 'carousel__button--right']

    // Попробовал тут именно такой вариант

    // Можно сделать иначе <button className={['carousel__button', `carousel__button--${direction}`].join(' ')} />
    // Тогда не нужна будет переменная rootClasses, но код получается более загруженным

    return (
        <button className={rootClasses.join(' ')} onClick={onClick}/>
    )
}