import React, { useState } from 'react';
import css from './Checkbox.module.scss';

interface CheckboxProps {
    children?: React.ReactNode;
    disabled?: boolean;
    error?: boolean;
    success?: boolean;
}

const Checkbox = ({ children, disabled, error, success }: CheckboxProps) => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

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
            <input onChange={handleChange} type="checkbox" disabled={disabled} />
            <span className={checkmarkStyle()} />
            {children}
        </label>
    );
};

export default Checkbox;
