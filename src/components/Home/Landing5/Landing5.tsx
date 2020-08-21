import React from 'react';
import css from './Landing5.module.scss';
import { withTranslation } from '@i18n';
import Text from '@components/common/Text/Text';

const namespacesRequired = ['home-page'];

type Landing5Props = {
    t: (string) => string;
};

const Landing5 = ({ t }: Landing5Props) => {
    return (
        <div className={css.wrapper}>
            <div className={css.left}>
                <img className={css.left__mockup} src="/images/mockup-phone.png" alt={'phone'} />
            </div>

            <div className={css.icon}>
                <img className={css.icon__torus} src="/images/torus.png" alt={'torus'} />
                <img className={css.icon__sphere_green} src="/images/sphere-green.png" alt={'sphere'} />
                <img className={css.icon__sphere_blue} src="/images/sphere-blue.png" alt={'sphere'} />
            </div>

            <div className={css.title}>
                <h1>{t('home-page:landing-5.main-title-1')} </h1>
                <div className={css.title__inline}>
                    <h1 className={css.title__inline__primary}>{t('home-page:landing-5.main-title-2')}</h1>
                </div>
                <Text customClass={css.title__text} variant={'body_01'} color={'ui-secondary'}>
                    {t('home-page:landing-5.subTitle')}
                </Text>
                <div className={css.store}>
                    <img className={css.play} src="/icons/play-store.svg" alt={'play_store'} />
                    <img className={css.apple} src="/icons/app-store.svg" alt={'app_store'} />
                </div>
            </div>
        </div>
    );
};

export default withTranslation(namespacesRequired)(Landing5);
