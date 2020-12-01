import React from 'react';
import css from './Avatar.module.scss';

type AvatarProps = {
    width: string;
    height: string;
    color: string;
    name: string;
    initial: string;
    onToggleProfil?: () => void;
};

const Avatar = ({ width, height, color, name, initial, onToggleProfil }: AvatarProps) => {
    const style = {
        width: width,
        height: height,
        backgroundColor: color,
    };

    return (
        <div onClick={() => onToggleProfil && onToggleProfil()} className={css.avatar}>
            <div className={css.avatar__circle} style={style}>
                <span className={css.avatar__circle__initial}>{initial}</span>
            </div>
            <span className={css.avatar__name}>{name}</span>
        </div>
    );
};

export default Avatar;
