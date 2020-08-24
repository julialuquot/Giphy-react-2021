import React from 'react';
import css from './Landing3.module.scss';
import { withTranslation } from '@i18n';
import Text from '@components/common/Text/Text';
import SpendingWay from '@components/Home/Landing3/component/SpendingWay';

const namespacesRequired = ['home-page'];

type Landing3Props = {
    t: (string) => string;
};

const Landing3 = ({ t }: Landing3Props) => {
    return (
        <div className={css.wrapper}>
            <div className={css.icon}>
                <img className={css.icon__torus} src="/images/torus.png" alt={'torus'} />
                <img className={css.icon__sphere} src="/images/sphere-blue.png" alt={'sphere'} />
                <img className={css.icon__wallet_left} src="/images/wallet.png" alt={'wallet'} />
                <img className={css.icon__wallet_right} src="/images/wallet.png" alt={'wallet'} />
            </div>

            <div className={css.title}>
                <h1>{t('home-page:landing-3.main-title-1')} </h1>
                <div className={css.title__inline}>
                    <h1>{t('home-page:landing-3.of')}</h1>
                    <h1 className={css.title__inline__primary}>{t('home-page:landing-3.main-title-2')}</h1>
                </div>
                <Text customClass={css.title__text} variant={'body_01'} color={'ui-secondary'}>
                    {t('home-page:landing-3.subTitle')}
                </Text>
            </div>
            <SpendingWay />
        </div>
    );
};

export default withTranslation(namespacesRequired)(Landing3);
