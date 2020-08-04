import React from 'react';
import css from './Button.module.scss';

interface ButtonProps {
    children: string;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    variant: string;
    disabled?: boolean;
}

const Button = ({ children, variant, disabled, onClick }: ButtonProps) => {
    const style = () => {
        let className = css.button;
        variant === 'primary' && (className += ' ' + css.button__primary);
        variant === 'secondary' && (className += ' ' + css.button__secondary);
        disabled && (className += ' ' + css.button__disabled);

        return className;
    };

    return (
        <button className={style()} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
