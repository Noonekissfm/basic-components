import React, { FC } from 'react';
import './style.css';

interface IProps {
    onClick: () => void;
}

export const MuteSwitcher: FC<IProps> = ({ onClick }) => {
    return (
        <button className="muteSwitcher" onClick={onClick}>
            {/* Добавить иконку */}
        </button>
    );
};
