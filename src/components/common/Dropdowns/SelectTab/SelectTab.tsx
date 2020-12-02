import React, { useState, useRef } from 'react';
import css from './SelectTab.module.scss';
import Dropdown from 'react-dropdown';
import useOnClickOutside from '../../hooks/useOnClickOutside';

type DropdownProps = {
    options: { value: string; label: JSX.Element }[];
    label?: string;
    customClass?: string;
    placeholder?: string;
};

const Select = ({ options, customClass, label, placeholder }: DropdownProps) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isOptionSelected, setIsOptionSelected] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isHover, setIsHover] = useState(false);

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

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const arrowClosed = (
        <span className={css.select__arrow_closed}>
            {isHover ? (
                <img src="/front-static/icons/chevron-down-grey.svg" alt="chevron_down" />
            ) : (
                <img src="/front-static/icons/chevron-down-black.svg" alt="chevron_down" />
            )}
        </span>
    );

    const arrowOpen = (
        <span className={css.select__arrow_open}>
            {isHover ? (
                <img src="/front-static/icons/chevron-down-grey.svg" alt="chevron_down" />
            ) : (
                <img src="/front-static/icons/chevron-down-black.svg" alt="chevron_down" />
            )}
        </span>
    );

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={ref}
            className={`${css.input__wrapper}  ${customClass || ''}}`}
        >
            <label className={css.label}>{label}</label>
            <Dropdown
                options={options}
                onFocus={handleFocus}
                onChange={handleChange}
                value={selectedOption}
                placeholder={placeholder}
                className={css.select}
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
