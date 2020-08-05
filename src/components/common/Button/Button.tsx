import React from 'react';
import Spinner from '../Spinner/Spinner';
import css from './Button.module.scss';

interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit';
    variant: string;
    size: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({ children, type, variant, size, isDisabled, isLoading, onClick }: ButtonProps) => {
    const style = () => {
        let className = css.default;
        variant === 'primary' && (className += ' ' + css.primary);
        variant === 'secondary' && (className += ' ' + css.secondary);
        size === 'small' && (className += ' ' + css.small);
        size === 'medium' && (className += ' ' + css.medium);
        size === 'large' && (className += ' ' + css.large);
        isDisabled && (className += ' ' + css.disabled);

        return className;
    };

    return (
        <button type={type} className={style()} onClick={onClick}>
            {children}
            <Spinner isLoading={isLoading} />
        </button>
    );
};

export default Button;
