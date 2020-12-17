import React, { useState, useRef } from 'react';
import css from './Select.module.scss';
import Dropdown from 'react-dropdown';
import useOnClickOutside from '../../hooks/useOnClickOutside';

type DropdownProps = {
    options: { value: string; label: string }[];
    label?: string;
    customSelect?: string;
    placeholder?: string;
};

const Select = ({ options, customSelect, label, placeholder }: DropdownProps) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isOptionSelected, setIsOptionSelected] = useState(true);
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
            {isOpen ? (
                <img src="/front-static/icons/chevron-down-white.svg" alt="chevron_down" />
            ) : (
                <img src="/front-static/icons/chevron-down-grey.svg" alt="chevron_down" />
            )}
        </span>
    );

    const arrowOpen = (
        <span className={css.select__arrow_open}>
            {isOptionSelected ? (
                <img src="/front-static/icons/chevron-down-white.svg" alt="chevron_down" />
            ) : (
                <img src="/front-static/icons/chevron-down-white.svg" alt="chevron_down" />
            )}
        </span>
    );

    return (
        <div ref={ref}>
            <label className={css.label}>{label}</label>
            <Dropdown
                options={options}
                onFocus={handleFocus}
                onChange={handleChange}
                value={selectedOption}
                placeholder={placeholder || options[0].label}
                className={`${css.select} ${customSelect || ''}`}
                controlClassName={`${css.select__control} ${
                    isOpen && isOptionSelected && css.select__control__is_open
                }`}
                placeholderClassName={css.select__placeholder}
                menuClassName={css.select__menu}
                arrowClassName={css.select__arrow}
                arrowClosed={arrowClosed}
                arrowOpen={arrowOpen}
            />
        </div>
    );
};

export default Select;
