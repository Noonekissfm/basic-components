import React, { FC, ReactNode } from 'react';
import { Size } from '../../types/Sizes';

import './style.css'

interface IProps {
    children: ReactNode;
    width: Size;
    height: number;
}

export const Rail: FC<IProps> = ({children, width, height}) => {

    return (
        <div className='rail__container' style={{width: width,  height: `${height}px`}}>
            {children}
        </div>
    )
};