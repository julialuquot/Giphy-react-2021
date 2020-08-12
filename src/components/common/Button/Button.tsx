import React from 'react';
import Spinner from '../Spinner/Spinner';
import css from './Button.module.scss';

type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    children: React.ReactNode;
    type?: 'button' | 'submit';
    isDisabled?: boolean;
    isLoading?: boolean;
    customClass?: string;
    variant: string;
    size: string;
};

const Button = ({ children, type, variant, size, isDisabled, isLoading, onClick, customClass }: ButtonProps) => {
    const buttonStyle = () => {
        let className = '';
        className += ' ' + css[variant];
        className += ' ' + css[size];
        isDisabled && (className += ' ' + css.disabled);

        return className;
    };

    return (
        <button type={type} disabled={isDisabled} className={`${buttonStyle()} ${customClass || ''}`} onClick={onClick}>
            {children}
            <Spinner isLoading={isLoading} />
        </button>
    );
};

export default Button;
