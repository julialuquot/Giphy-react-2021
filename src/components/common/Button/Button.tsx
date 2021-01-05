import React from 'react';
import Spinner from '@components/common/Spinner/Spinner';
import useWindowSize from '@components/common/hooks/useWindowSize';
import css from './Button.module.scss';

type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    isDisabled?: boolean;
    isLoading?: boolean;
    customClass?: string;
    variant?: string;
    size?: string;
    mobileFullWidth?: boolean;
    margin?: string;
    width?: string;
    height?: string;
    icon?: string;
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
    icon,
}: ButtonProps) => {
    const windowSize = useWindowSize();

    const buttonStyle = () => {
        let className = '';
        className += ' ' + css[variant];
        className += ' ' + css[size];
        isDisabled && (className += ' ' + css.disabled);
        mobileFullWidth && windowSize.width < 875 && (className += ' ' + css.mobile_full_width);

        return className;
    };

    const style = {
        margin: margin,
        width: windowSize.width < 875 && mobileFullWidth ? '90vw' : width,
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
            <div className={isLoading ? css.loading : ''}>
                {icon && <img className={css.icon} src={icon} alt={icon} />}
                {children}
            </div>
            {isLoading && <Spinner customClass={css.spinner} />}
        </button>
    );
};

export default Button;
