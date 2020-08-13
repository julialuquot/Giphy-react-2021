import React, { useState } from 'react';
import css from './Select.module.scss';
import Dropdown from 'react-dropdown';

type DropdownProps = {
    options: { value: string; label: string }[];
    label?: string;
    customClass?: string;
    placeholder?: string;
};

const Select = ({ options, customClass, label, placeholder }: DropdownProps) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isOptionSelected, setIsOptionSelected] = useState(false);

    const handleChange = (e) => {
        setSelectedOption(e.value);
        setIsOptionSelected(true);
    };

    return (
        <div className={`${css.input__wrapper}  ${customClass || ''}}`}>
            <label className={css.label}>{label}</label>
            <Dropdown
                options={options}
                onChange={handleChange}
                value={selectedOption}
                placeholder={placeholder || options[0].label}
                className={`${css.select}`}
                controlClassName={`${css.select__control} ${isOptionSelected && css.select__control__option_selected}`}
                placeholderClassName={`${css.select__placeholder}`}
                menuClassName={css.select__menu}
                arrowClassName={`${css.select__arrow} ${
                    !isOptionSelected ? css.select__arrow__default : css.select__arrow__option_selected
                } `}
            />
        </div>
    );
};

export default Select;
