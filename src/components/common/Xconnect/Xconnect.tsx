import React from 'react';
import css from './Xconnect.scss';

const Xconnect: React.FC = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.apple}>
                <img src="front-static/icons/apple-logo.svg" alt="apple logo" />
            </div>
            <div className={css.google}>
                <img src="front-static/icons/google-logo.svg" alt="google logo" />
            </div>
            <div className={css.facebook}>
                <img src="front-static/icons/facebook-logo.svg" alt="facebook logo" />
            </div>
        </div>
    );
};
export default Xconnect;
