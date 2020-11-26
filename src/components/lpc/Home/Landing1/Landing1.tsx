import React from 'react';
import css from './Landing1.module.scss';
import { withTranslation } from '@i18n';
import Button from '@components/common/Button/Button';
import Select from '@components/common/Dropdowns/Select/Select';
import useWindowSize from '@components/common/hooks/useWindowSize';

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

const Landing1 = ({ t }: LandingProps) => {
    const size = useWindowSize();

    const handleClick = () => {};
    return (
        <div className={css.wrapper}>
            <div className={css.banner}>
                {size.width < 875 && (
                    <>
                        <img
                            className={css.banner__gift_left_mobile}
                            src={'/images/gift-left-mobile.png'}
                            alt={'gift'}
                        />
                        <img
                            className={css.banner__gift_right_mobile}
                            src={'/images/gift-right-mobile.png'}
                            alt={'gift'}
                        />
                    </>
                )}
                <div className={css.icons__container}>
                    <div className={css.icons__container__relative}>
                        <img className={css.sphere_blue_left} src="/images/sphere-blue.png" alt={'sphere'} />
                        <img className={css.sphere_blue_right} src="/images/sphere-blue.png" alt={'sphere'} />
                        <img className={css.sphere_yellow_right} src="/images/sphere-yellow.png" alt={'sphere'} />
                        <img className={css.banner__gift_small} src="/images/gift-right.png" alt={'gift'} />
                        <img className={css.banner__sphere_green} src="/images/sphere-green.png" alt={'sphere'} />
                        <img className={css.banner__gift_left} src={'/images/gift-left.png'} alt={'gift'} />{' '}
                        <img className={css.banner__gift_right} src={'/images/gift-right.png'} alt={'gift'} />
                    </div>
                </div>
                <img className={`${css.arrow} ${css.bounce}`} src="/icons/arrow-downward.svg" alt={'arrow'} />

                <div className={css.banner__content}>
                    <h1>{t('home-page:landing.main-title')}</h1>

                    <div className={css.banner__dropdown}>
                        <Select options={options} />
                    </div>
                    <div className={css.banner__btn}>
                        <Button mobileFullWidth onClick={() => handleClick()} variant={'primary'} size={'medium'}>
                            {t('home-page:landing.button--create-pot')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withTranslation(namespacesRequired)(Landing1);
