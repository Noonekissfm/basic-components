import React, { FC, useState } from 'react';
import { MuteIcon } from '../../../assets/Icons/Mute';
import { UnmuteIcon } from '../../../assets/Icons/Unmute';
import { Color } from '../../../types/Colors';
import './style.css';

interface IProps {
    item: {
        src: string;
        video: string;
        name: string;
        link: string;
    };
}

export const VideoCard: FC<IProps> = ({ item }) => {
    const { src, video, name, link } = item;

    const [onHover, setOnHover] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    return (
        <li onMouseOver={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)} style={{ marginLeft: 30+'px' }}>
            {onHover && (
                <div className="cardFace">
                    <div className="cardFace__body">
                        <video className="cardFace__body__video" src={video} autoPlay={true} muted={isMuted} loop />
                        <button className='cardFace__body__muteButton'onClick={()=>setIsMuted(!isMuted)}>
                            {isMuted? <MuteIcon color={Color.WHITE} /> : <UnmuteIcon color={Color.WHITE} />}
                        </button>
                    </div>
                    <div className="cardFace__footer">
                        <div className="cardFace__footer__top"><span>{name}</span></div>
                        <div className="cardFace__footer__bottom">
                            <a href={link} target='_blank'><button className='YT'>Watch on YouTube</button></a>
                        </div>
                    </div>
                </div>
            )}

            {!onHover && <div className="cardFace cardFace__cover" style={{ backgroundImage: `url(${src})` }}></div>}
        </li>
    );
};

// TODO:
/**
 * Сделать карточку контента у которой будет два состояния:
 * -- Состояния меняются по событию onMouseOver и onMouseLeave
 *
 * Первичное состояние:
 * -- Статичная картинка содержащая в себе логотип или скриншот из контента
 *
 * Вторичное состояние:
 * -- При изменении состояния карточка делится на две части: Основная часть 8/10 и меньшая часть 2/10
 * -- В основной части будет воспроизводиться видео из контента и кнопка, которая позволяет выключить звук из видео
 * -- В меньшей части содержится название контента, кнопка позволяющая перейти на страницу с контентом и различная информация о контенте
 */
