import React from 'react';
import css from './Checkbox.module.scss';
import Text from '../Text/Text';

interface CheckboxProps {
    children?: React.ReactNode;
    disabled?: boolean;
    error?: boolean;
    success?: boolean;
    onChange: any;
    value: boolean;
    name: string;
}

const Checkbox = ({ children, disabled, error, success, onChange, value, name }: CheckboxProps) => {
    const checked = value;
    const checkmarkStyle = () => {
        let className = css.checkmark;
        checked && (className += ' ' + css.checkmark__checked);
        checked && success && (className += ' ' + css.checkmark__checked__success);
        checked && error && (className += ' ' + css.checkmark__checked__error);
        error && (className += ' ' + css.checkmark__error);
        disabled && (className += ' ' + css.checkmark__disabled);

        return className;
    };

    return (
        <label className={css.container}>
            <input onChange={onChange} name={name} type="checkbox" disabled={disabled} />
            <span className={checkmarkStyle()} />
            <Text variant="body_02">{children}</Text>
        </label>
    );
};

export default Checkbox;
