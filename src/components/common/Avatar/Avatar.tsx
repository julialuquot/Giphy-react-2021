import React from 'react';
import css from './Avatar.module.scss';

interface AvatarProps {
    children?: React.ReactNode;
    imageSrc: string;
    color: string;
    label: string;
    customClass: string;
}

const Avatar = ({ imageSrc, color, label, customClass }: AvatarProps) => {
    const circleColor = () => {
        let className = css.circle;
        className += ' ' + css['circle__' + color];

        return className;
    };
    const labelColor = () => {
        let className = css.label;
        className += ' ' + css['label__' + color];

        return className;
    };
    return (
        <div className={customClass || ''}>
            <div className={circleColor()}>
                <img className={css.image} src={imageSrc} alt="avatar_img" />
                <div className={labelColor()}>{label}</div>
            </div>
        </div>
    );
};

export default Avatar;
