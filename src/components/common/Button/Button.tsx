import React from 'react';
import Spinner from '@components/common/Spinner/Spinner';
import css from './Button.module.scss';

type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    children: React.ReactNode;
    type?: 'button' | 'submit';
    isDisabled?: boolean;
    isLoading?: boolean;
    customClass?: string;
    variant?: string;
    size?: string;
    mobileFullWidth?: boolean;
    margin?: string;
    width?: string;
    height?: string;
};

const Button = ({
    children,
    type,
    variant,
    size,
    isDisabled,
    isLoading,
    onClick,
    customClass,
    mobileFullWidth,
    margin,
    width,
    height,
}: ButtonProps) => {
    const buttonStyle = () => {
        let className = '';
        className += ' ' + css[variant];
        className += ' ' + css[size];
        isDisabled && (className += ' ' + css.disabled);
        mobileFullWidth && (className += ' ' + css.mobile_full_width);

        return className;
    };

    const style = {
        margin: margin,
        width: width,
        height: height,
    };

    return (
        <button
            style={style}
            type={type}
            disabled={isDisabled}
            className={`${buttonStyle()} ${customClass || ''}`}
            onClick={onClick}
        >
            {children}
            <Spinner isLoading={isLoading} />
        </button>
    );
};

export default Button;
