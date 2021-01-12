import React, { useState } from 'react';
import css from './SearchInput.scss';

type SearchInputProps = {
    onSearch: any;
    icon: string;
    placeholder: string;
    customClass?: string;
};

const SearchInput = ({ onSearch, icon, placeholder, customClass }: SearchInputProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    };
    return (
        <div className={`${css.search} ${customClass || ''}`}>
            <input type="text" placeholder={placeholder} value={searchTerm} onChange={handleChange} />
            <img src={icon} alt="search" />
        </div>
    );
};

export default SearchInput;
