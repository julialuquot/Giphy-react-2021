import React from 'react';
import css from './Label.module.scss';

interface LabelProps {
    children: React.ReactNode;
    color: string;
    customClass?: string;
}

const Label = ({ children, color, customClass }: LabelProps) => {
    const labelStyle = () => {
        let className = css.label;
        className += ' ' + css[color];

        return className;
    };

    return <div className={`${labelStyle()} ${customClass || ''}`}>{children}</div>;
};

export default Label;
