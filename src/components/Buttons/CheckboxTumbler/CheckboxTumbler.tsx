import React, { FC, useState } from 'react';
import { CheckIcon } from '../../../assets/Icons/CheckIcon';
import { Color } from '../../../types/Colors';
import { Size } from '../../../types/Sizes';
import './style.css';

interface IProps {
    color?: Color;
    size?: Size;
    checked: boolean;
    children: any;
    onChange: (flag: boolean) => void;
}

export const AppCheckbox: FC<IProps> = ({ color = Color.BRAND, checked = false, size = Size.MEDIUM, onChange, children }) => {
    const [isChecked, setChecked] = useState(checked);

    const setCheckedHandler = () => {
        setChecked(!isChecked);
        onChange(isChecked)
    };

    return (
        <div className={`inputWrapper inputWrapper--${size}`}>
            <input
                className={`tumbler-input tumbler--${size}`}
                type="checkbox"
                checked={isChecked}
                style={{ backgroundColor: `${!isChecked ? Color.GRAY : color}` }}
                onChange={setCheckedHandler}
            />
            <span className={`tumbler-check tumbler--${size}`}>
                {children? children : <CheckIcon color={color} /> }
            </span>
        </div>
    );
};
