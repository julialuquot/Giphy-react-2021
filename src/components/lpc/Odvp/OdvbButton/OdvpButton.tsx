import React from 'react';
import css from './OdvpButton.module.scss';
import Link from 'next/link';

type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    children: React.ReactNode;
    type?: 'button' | 'submit';
    customClass?: string;
    width?: number;
    height?: number;
    fontSize?: number;
    borderRadius?: number;
};

const OdvpButton = ({ children, type, onClick, customClass, width, height, fontSize, borderRadius }: ButtonProps) => {
    const buttonStyle = {
        width: width,
        height: height,
        fontSize: fontSize,
        borderRadius: borderRadius,
    };

    return (
        <Link href={'/?action=create-pot'}>
            <a>
                <button
                    type={type}
                    className={`${css.button} ${customClass || ''}`}
                    style={buttonStyle}
                    onClick={onClick}
                >
                    {children}
                </button>
            </a>
        </Link>
    );
};

export default OdvpButton;
