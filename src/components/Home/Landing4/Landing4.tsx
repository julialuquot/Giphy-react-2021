import React from 'react';
import css from './Landing4.module.scss';
import { withTranslation } from '@i18n';
import CardWithSwiper from '@components/Home/Landing4/components/CardWithSwiper';

type Landing4Props = {
    t: (string) => string;
};

const namespacesRequired = ['home-page'];

const Landing4 = ({ t }: Landing4Props) => {
    return (
        <div className={css.wrapper}>
            <div className={css.title}>
                <h1>{t('home-page:landing-4.main-title')}</h1>
                <h1 className={css.title__primary}>{t('home-page:landing-4.subtitle')}</h1>
            </div>
            <CardWithSwiper />
        </div>
    );
};

export default withTranslation(namespacesRequired)(Landing4);
