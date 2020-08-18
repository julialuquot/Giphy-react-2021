import React from 'react';
import css from './InputField.module.scss';

type InputFieldProps = {
    id: string;
    name: string;
    type: string;
    label: string;
    placeholder: string;
    disabled: boolean;
    error: boolean;
    valid: boolean;
    value: string | number;
    icon?: string;
    iconPosition: 'left' | 'right';
    onChange: React.FormEventHandler<HTMLInputElement>;
    onBlur: React.FormEventHandler<HTMLInputElement>;
    customStyle?: string;
};

const InputField = ({
    id,
    name,
    type,
    label,
    placeholder,
    value,
    disabled,
    error,
    valid,
    icon,
    iconPosition,
    onChange,
    onBlur,
    customStyle,
}: InputFieldProps) => {
    const getClassName = () => {
        let className = css.input;
        if (valid) {
            className += ' ' + css.input__valid;
        }
        if (error) {
            className += ' ' + css.input__error;
        }
        if (icon) {
            if (iconPosition === 'right') {
                className += ' ' + css.input__iconRight;
            } else {
                className += ' ' + css.input__iconLeft;
            }
        }

        if (customStyle) {
            className += ' ' + css[`input__${customStyle}`];
        }
        return className;
    };

    return (
        <div className={css.wrapper}>
            {label && (
                <label htmlFor={id} className={css.label}>
                    {label}
                </label>
            )}
            <div className={css.input__wrapper}>
                <input
                    type={type}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    className={getClassName()}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                />
                {icon && (
                    <div
                        className={`${css.input__icon} ${
                            iconPosition === 'right' ? css[`input__icon__${iconPosition}`] : css.input__icon__left
                        }`}
                    >
                        <img src={icon} alt="input icon" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default InputField;
