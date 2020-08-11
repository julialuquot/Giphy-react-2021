import React from 'react';
import Spinner from '../Spinner/Spinner';
import css from './Button.module.scss';

type ButtonProps = {
    children: React.ReactNode;
    type?: 'button' | 'submit';
    variant: string;
    size: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

const Button = ({ children, type, variant, size, isDisabled, isLoading, onClick }: ButtonProps) => {
    const style = () => {
        let className = '';
        className += ' ' + css[variant];
        className += ' ' + css[size];
        isDisabled && (className += ' ' + css.disabled);

        return className;
    };

    return (
        <button type={type} disabled={isDisabled} className={style()} onClick={onClick}>
            {children}
            <Spinner isLoading={isLoading} />
        </button>
    );
};

export default Button;
