import React, { useState, useRef } from 'react';
import css from './SelectSmall.module.scss';
import Dropdown from 'react-dropdown';
import useOnClickOutside from '../../hooks/useOnClickOutside';

type SelectSmallProps = {
    options: { value: string; label: string }[];
    label?: string;
    customClass?: string;
    placeholder?: string;
    icon?: string;
};

const SelectSmall = ({ options, customClass, label, placeholder, icon }: SelectSmallProps) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isOptionSelected, setIsOptionSelected] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef();
    useOnClickOutside(ref, () => setIsOpen(false));

    const handleChange = (e) => {
        setSelectedOption(e.value);
        setIsOptionSelected(true);
        setIsOpen(false);
    };

    const handleFocus = () => {
        setIsOpen(true);
    };

    const arrowClosed = (
        <span className={css.select__arrow_closed}>
            <img src="/icons/chevron-down-grey-small.svg" alt="chevron_up" />
        </span>
    );

    const arrowOpen = (
        <span className={css.select__arrow_open}>
            {isOptionSelected ? (
                <img src="/icons/chevron-down-black-small.svg" alt="chevron_up" />
            ) : (
                <img src="/icons/chevron-down-grey-small.svg" alt="chevron_up" />
            )}
        </span>
    );

    return (
        <div ref={ref} className={`${css.input__wrapper}  ${customClass || ''}}`}>
            <label className={css.label}>{label}</label>
            {icon && <img className={css.icon_left} src={icon} alt="input icon" />}

            <Dropdown
                className={`${css.select}`}
                options={options}
                onFocus={handleFocus}
                onChange={handleChange}
                value={selectedOption}
                placeholder={placeholder || options[0].label}
                controlClassName={`${css.select__control} ${isOpen && css.select__control__is_open}`}
                placeholderClassName={`${css.select__placeholder} `}
                menuClassName={css.select__menu}
                arrowClassName={css.select__arrow}
                arrowClosed={arrowClosed}
                arrowOpen={arrowOpen}
            />
        </div>
    );
};

export default SelectSmall;
