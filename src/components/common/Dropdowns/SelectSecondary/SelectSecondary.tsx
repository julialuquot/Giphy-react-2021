import React, { useState, useRef, useEffect } from 'react';
import css from './SelectSecondary.module.scss';
import Dropdown from 'react-dropdown';
import useOnClickOutside from '../../hooks/useOnClickOutside';

type DropdownProps = {
    options: { value: string; label: string }[];
    label?: string;
    customSelect?: string;
    placeholder?: string;
    closedIcon: string;
    openIcon: string;
    onSelect: (string) => void;
    customMenu?: string;
    customWidth?: string;
    customControl?: string;
};

const SelectSecondary = ({
    options,
    customSelect,
    label,
    placeholder,
    closedIcon,
    openIcon,
    onSelect,
    customMenu,
    customControl,
}: DropdownProps) => {
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

    useEffect(() => {
        onSelect(selectedOption);
    }, [onSelect, selectedOption]);

    const arrowClosed = (
        <span className={css.select__arrow_closed}>
            <img src={closedIcon} alt="open" />
        </span>
    );

    const arrowOpen = (
        <span className={css.select__arrow_open}>
            <img src={openIcon} alt="close" />
        </span>
    );

    return (
        // @ts-ignore
        <div ref={ref}>
            <label className={css.label}>{label}</label>
            <Dropdown
                options={options}
                onFocus={handleFocus}
                onChange={handleChange}
                value={selectedOption}
                placeholder={placeholder || options[0].label}
                controlClassName={`${css.select__control} ${
                    isOpen && isOptionSelected && css.select__control__is_open
                } ${customControl || ''}`}
                placeholderClassName={css.select__placeholder}
                className={`${css.select} ${customSelect || ''}`}
                menuClassName={`${css.select__menu} ${customMenu || ''}`}
                arrowClassName={css.select__arrow}
                arrowClosed={arrowClosed}
                arrowOpen={arrowOpen}
            />
        </div>
    );
};

export default SelectSecondary;