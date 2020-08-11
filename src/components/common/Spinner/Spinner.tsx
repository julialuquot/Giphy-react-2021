import React from 'react';
import css from './Spinner.module.scss';

interface SpinnerProps {
    isLoading: boolean;
}

const Spinner = ({ isLoading }: SpinnerProps) => {
    return (
        <div className={`${css.button_spinner_container} ${isLoading ? css.button_spinner_container__visible : ''}`}>
            <div className={css.button_spinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;
