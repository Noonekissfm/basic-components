import React, { FC, useState } from 'react';
import { size } from '../../types/sizes';
import './style.css';

interface IProps {
    color: string;
    size: size;
    checked: boolean;
}

export const AppCheckbox: FC<IProps> = ({ color = '#6c43bf', checked = false, size }) => {
    const [isChecked, setChecked] = useState(checked);

    const setCheckedHandler = () => {
        setChecked(!isChecked);
    };

    return (
        <div className={`inputWrapper inputWrapper--${size}`}>
            <input
                className={`tumbler-input tumbler--${size}`}
                type="checkbox"
                checked={isChecked}
                style={{ backgroundColor: `${!isChecked ? '#c2c2c2' : color}` }}
                onChange={setCheckedHandler}
            />
            <span className={`tumbler-check tumbler--${size}`}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill={color}>
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                </svg>
            </span>
        </div>
    );
};
