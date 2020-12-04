import React from 'react';
import css from './ButtonControl.module.scss';

type ButtonControlProps = {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    children: React.ReactNode;
    type?: 'button' | 'submit';
    isDisabled?: boolean;
    customClass?: string;
};

const ButtonControl = ({ children, type, isDisabled, onClick, customClass }: ButtonControlProps) => {
    const buttonStyle = () => {
        let className = css.button;
        isDisabled && (className += ' ' + css.disabled);

        return className;
    };

    return (
        <button type={type} disabled={isDisabled} className={`${buttonStyle()} ${customClass || ''}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default ButtonControl;
