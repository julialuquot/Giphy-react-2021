import React from 'react';
import css from './Xconnect.scss';

const Xconnect: React.FC = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.apple}>
                <img src="icons/apple-logo.svg" alt="apple logo" />
            </div>
            <div className={css.google}>
                <img src="icons/google-logo.svg" alt="google logo" />
            </div>
            <div className={css.facebook}>
                <img src="icons/facebook-logo.svg" alt="facebook logo" />
            </div>
        </div>
    );
};
export default Xconnect;
