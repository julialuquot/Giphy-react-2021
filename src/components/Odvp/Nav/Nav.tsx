import React from 'react';
import css from './Nav.module.scss';
import OdvpButton from '@components/Odvp/OdvbButton/OdvpButton';

type NavProps = {
    isVisible: boolean;
};

const Nav = ({ isVisible }: NavProps) => {
    return (
        <div className={`${css.nav} ${!isVisible && css['nav--hidden']}`}>
            <img className={css.navbar__logo} src="/icons/logo-lpc.svg" alt={'logo lpc'} />

            <OdvpButton width={300} height={50}>
                Créer un pot commun
            </OdvpButton>
        </div>
    );
};

export default Nav;
