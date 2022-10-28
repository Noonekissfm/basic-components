import React, { FC } from 'react';
import './style.css';

interface IProps {
    link: string;
    label: string;
}

export const ButtonWithLink: FC<IProps> = ({link, label}) => {
  return (
    <a href={link} target='_blank' rel='noreferrer'><button className='buttonWithLink'>{label}</button></a>
  )
}
