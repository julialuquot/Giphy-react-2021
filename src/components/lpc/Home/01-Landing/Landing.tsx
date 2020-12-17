import React from 'react';
import { useTranslation, withTranslation } from '@i18n';
import Button from '@components/common/Button/Button';
import Select from '@components/common/Dropdowns/Select/Select';
import css from './Landing.module.scss';

const namespacesRequired = ['home-page'];

type LandingProps = {
    t: (string) => string;
};

// TODO remove fake data
const options = [
    { value: 'Un anniversaire', label: 'Un anniversaire' },
    { value: 'Un pot de départ', label: 'Un pot de départ' },
    { value: 'Un cadeau commun', label: 'Un cadeau commun' },
    { value: 'Un EVG /EVJF', label: 'Un EVG /EVJF' },
    { value: 'Une pendaison de crémaillère', label: 'Une pendaison de crémaillère' },
    { value: 'Un week-end vacances entre amis', label: 'Un week-end vacances entre amis' },
];

const Landing = () => {
    const { t } = useTranslation('lpc-home');

    const handleClick = () => {};
    return (
        <div className={css.landing}>
            <h1>{t('lpc-home:landing.main-title')}</h1>

            <div className={css.landing__main}>
                <Select options={options} />
                <Button
                    customClass={css.landing__main__primary}
                    mobileFullWidth
                    onClick={() => handleClick()}
                    variant={'primary'}
                >
                    {t('lpc-home:landing.create')}
                </Button>
            </div>
            <div className={`${css.landing__gift} ${css.bounce}`}>
                <img src="/front-static/images/home/gift.png" alt="gift" />
            </div>
        </div>
    );
};

export default withTranslation(namespacesRequired)(Landing);
