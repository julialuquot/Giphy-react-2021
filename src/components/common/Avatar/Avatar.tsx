import React from 'react';
import css from './Avatar.module.scss';

interface AvatarProps {
    children?: React.ReactNode;
    imageSrc: string;
    color: string;
    label: string;
}

const Avatar = ({ imageSrc, color, label }: AvatarProps) => {
    const circleColor = () => {
        let className = css.circle;
        color === 'primary' && (className += ' ' + css.circle__primary);
        color === 'secondary' && (className += ' ' + css.circle__secondary);

        return className;
    };
    const labelColor = () => {
        let className = css.label;
        color === 'primary' && (className += ' ' + css.label__primary);
        color === 'secondary' && (className += ' ' + css.label__secondary);

        return className;
    };
    return (
        <div className={circleColor()}>
            <img className={css.image} src={imageSrc} alt="avatar_img" />
            <div className={labelColor()}>{label}</div>
        </div>
    );
};

export default Avatar;
