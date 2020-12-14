import React from 'react';
import css from './Profil.module.scss';
import { useTranslation } from '@i18n';
import Avatar from '@components/dashboard/Header/Avatar/Avatar';
import Link from 'next/link';

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
            <Avatar width={'48px'} height={'48px'} color={color} name={name} initial={initial} settings={true} />
            <span className={css.divider} />
            <Link href={'#'}>
                <a className={css.cta}>
                    <img src="/front-static/icons/external-link.svg" alt="link" />
                    <p>{t('dashboard-header:lpc-website')}</p>
                </a>
            </Link>
            <span onClick={() => onSignOut()} className={css.cta}>
                <img src="/front-static/icons/logout.svg" alt="logout" />
                <p>{t('dashboard-header:logout')}</p>
            </span>
        </div>
    );
};

export default Profil;
