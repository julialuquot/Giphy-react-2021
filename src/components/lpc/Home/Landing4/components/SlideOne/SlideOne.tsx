import React from 'react';
import css from './SlideOne.module.scss';
import Text from '@components/common/Text/Text';
import useWindowSize from '@components/common/hooks/useWindowSize';
import { withTranslation } from '@i18n';
import { M_DEVICE } from '@components/lpc/Constants';

type SlideOneProps = {
    t: (string) => string;
};

const namespacesRequired = ['home-page'];

const SlideOne = ({ t }: SlideOneProps) => {
    const size = useWindowSize();

    return (
        <div className={css.slide_one}>
            <h2>{t('home-page:landing-4.swiper.slide-1.title')}</h2>
            <Text color={'ui-secondary'} variant={'body_01'}>
                {t('home-page:landing-4.swiper.slide-1.text')}
            </Text>
            <img className={css.slide_one__sphere_blue} src="/images/sphere-blue.png" alt={'sphere'} />
            <img className={css.slide_one__torus_yellow} src="/images/torus-yellow.png" alt={'torus'} />
            <img
                className={css.slide_one__sphere_green}
                src={size.width > M_DEVICE ? '/images/sphere-half-green.png' : '/images/sphere-green-mobile.png'}
                alt={'sphere'}
            />
            <img
                className={css.slide_one__torus_red}
                src={size.width > M_DEVICE ? '/images/torus-red.png' : '/images/torus-red-mobile.png'}
                alt={'torus'}
            />
        </div>
    );
};

export default withTranslation(namespacesRequired)(SlideOne);
