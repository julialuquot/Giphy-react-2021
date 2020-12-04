import React from 'react';
import css from './Text.module.scss';

type TextProps = {
    children: React.ReactNode;
    variant?: string;
    color?: string;
    customClass?: string;
    tag?: string;
};

const Text = ({ variant, children, color, customClass, tag }: TextProps) => {
    const textStyle = () => {
        let className = '';
        color && (className += ' ' + css[color]);
        variant === 'body_00' && (className += ' ' + css.body_00);
        variant === 'body_01' && (className += ' ' + css.body_01);
        variant === 'body_02' && (className += ' ' + css.body_02);
        variant === 'button' && (className += ' ' + css.button);
        variant === 'label' && (className += ' ' + css.label);
        variant === 'tagline' && (className += ' ' + css.tagline);
        variant === 'caption' && (className += ' ' + css.caption);
        variant === 'hint' && (className += ' ' + css.hint);
        return className;
    };
    if (tag && tag === 'span') {
        return <span className={`${textStyle()} ${customClass || ''}`}>{children}</span>;
    }

    return <p className={`${textStyle()} ${customClass || ''}`}>{children}</p>;
};

export default Text;
