import React, { FC, useEffect, useState } from 'react';
import './style.css';

interface IProps {
    color: string;
    size: 'small' | 'medium';
    checked: boolean;
}

export const AppCheckbox: FC<IProps> = ({ color = '#6c43bf', checked = false, size = 'medium' }) => {
    const [isChecked, setChecked] = useState(checked);

    const setCheckedHandler = () => {
        setChecked(!isChecked);
    };

    useEffect(() => {
        const property = document.documentElement.style;
        switch (size) {
            case 'medium':
                property.setProperty('--togglerHandleSize', '32px');
                return;
            case 'small':
                property.setProperty('--togglerHandleSize', '16px');
        }
    });

    return (
        <div>
            <input
                type="checkbox"
                checked={isChecked}
                style={{ backgroundColor: `${!isChecked ? '#c2c2c2' : color}` }}
                onChange={setCheckedHandler}
            />
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill={color}>
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                </svg>
            </span>
        </div>
    );
};
