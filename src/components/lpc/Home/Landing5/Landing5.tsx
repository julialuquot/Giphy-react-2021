import React from 'react';
import css from './Landing5.module.scss';
import { withTranslation } from '@i18n';
import Text from '@components/common/Text/Text';
import { M_DEVICE } from '@components/lpc/Constants';
import useWindowSize from '@components/common/hooks/useWindowSize';

const namespacesRequired = ['home-page'];

type Landing5Props = {
    t: (string) => string;
};

const Landing5 = ({ t }: Landing5Props) => {
    const size = useWindowSize();

    return (
        <div className={css.wrapper}>
            <div className={css.left}>
                <img className={css.left__mockup} src="/front-static/images/mockup-phone.png" alt={'phone'} />
                {size.width < M_DEVICE && (
                    <div className={css.store}>
                        <img className={css.play} src="/front-static/icons/play-store.svg" alt={'play_store'} />
                        <img className={css.apple} src="/front-static/icons/app-store.svg" alt={'app_store'} />
                    </div>
                )}
            </div>

            <div className={css.icon}>
                <img className={css.icon__torus} src="/images/old/torus.png" alt={'torus'} />
                <img className={css.icon__sphere_green} src="/front-static/images/sphere-green.png" alt={'sphere'} />
                <img className={css.icon__sphere_blue} src="/front-static/images/sphere-blue.png" alt={'sphere'} />
            </div>

            <div className={css.title}>
                <h1>{t('home-page:landing-5.main-title-1')} </h1>
                <div className={css.title__inline}>
                    <h1 className={css.title__inline__primary}>{t('home-page:landing-5.main-title-2')}</h1>
                </div>
                <Text customClass={css.title__text} variant={'body_01'} color={'ui-secondary'}>
                    {t('home-page:landing-5.subTitle')}
                </Text>
                {size.width > M_DEVICE && (
                    <div className={css.store}>
                        <img className={css.play} src="/front-static/icons/play-store.svg" alt={'play_store'} />
                        <img className={css.apple} src="/front-static/icons/app-store.svg" alt={'app_store'} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default withTranslation(namespacesRequired)(Landing5);
