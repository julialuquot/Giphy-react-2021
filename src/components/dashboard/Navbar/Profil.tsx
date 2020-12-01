import React from 'react';
import css from './Profil.module.scss';
import { useTranslation } from '@i18n';
import Avatar from '@components/dashboard/Navbar/Avatar';

type ProfilProps = {
    initial: string;
    name: string;
    color: string;
    isOpen: boolean;
    onSignOut: () => void;
};

const Profil = ({ onSignOut, initial, name, color, isOpen }: ProfilProps) => {
    const { t } = useTranslation('dashboard-header');

    return (
        <div className={`${css.profil} ${isOpen && css.profil__open}`}>
            <Avatar width={'48px'} height={'48px'} color={color} name={name} initial={initial} />

            <span className={css.divider} />
            <span className={css.cta}>
                <img src="/icons/external-link.svg" alt="link" />
                <p>{t('dashboard-header:lpc-dashboard')}</p>
            </span>
            <span onClick={() => onSignOut()} className={css.cta}>
                <img src="/icons/logout.svg" alt="logout" />
                <p>{t('dashboard-header:logout')}</p>
            </span>
        </div>
    );
};

export default Profil;
