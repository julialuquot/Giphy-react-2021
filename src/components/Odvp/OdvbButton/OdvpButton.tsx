import React from 'react';
import css from './OdvpButton.module.scss';

type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    children: React.ReactNode;
    type?: 'button' | 'submit';
    customClass?: string;
    width?: number;
    height?: number;
};

const OdvpButton = ({ children, type, onClick, customClass, width, height }: ButtonProps) => {
    const buttonStyle = {
        width: width,
        height: height,
    };

    return (
        <button type={type} className={`${css.button} ${customClass || ''}`} style={buttonStyle} onClick={onClick}>
            {children}
        </button>
    );
};

export default OdvpButton;
