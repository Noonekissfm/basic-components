import React, { FC } from 'react';
import { MuteIcon } from '../../../assets/Icons/Mute';
import { UnmuteIcon } from '../../../assets/Icons/Unmute';
import { Color } from '../../../types/Colors';
import './style.css';

interface IProps {
    isMuted: boolean;
    onClick: () => void;
}

export const MuteSwitcher: FC<IProps> = ({ isMuted, onClick }) => {

    return (
        <button className="muteSwitcher" onClick={onClick}>
            {isMuted ? <MuteIcon color={Color.WHITE} /> : <UnmuteIcon color={Color.WHITE} />}
        </button>
    );
};
