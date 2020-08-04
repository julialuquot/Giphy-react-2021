import React from 'react';
import css from './Spinner.scss';

const Spinner = () => {
    return (
        <div className="spinner">
            <span className={css.spinner_inner_1} />
            <span className={css.spinner_inner_1} />
            <span className={css.spinner_inner_1} />
        </div>
    );
};

export default Spinner;
