import React from 'react';
import css from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={css.navbar}>
            <div className={css.navbar__left}>
                <img className={css.navbar__logo} src="/front-static/icons/logo-lpc.svg" alt={'logo lpc'} />
            </div>
        </nav>
    );
};

export default Navbar;
