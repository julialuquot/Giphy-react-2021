import React from 'react';
import css from './Banner.module.scss';
import Text from '@components/common/Text/Text';
import Button from '@components/common/Button/Button';
import { M_DEVICE } from '@components/Constants';
import useWindowSize from '@components/Hooks/useWindowSize';
import { withTranslation } from '@i18n';

const namespacesRequired = ['footer'];

type BannerProps = {
    t: (string) => string;
};

const Banner = ({ t }: BannerProps) => {
    const { width } = useWindowSize();

    return (
        <div className={css.banner}>
            <div className={css.content}>
                <div className={css.text}>
                    <h5>{t('footer:banner.title')}</h5>
                    <Text variant={'body_02'} color={'ui-secondary'}>
                        {width > M_DEVICE ? t('footer:banner.text') : t('footer:banner.text-mobile')}
                    </Text>
                </div>
                <Button size={'medium'} variant={'primary'} customClass={css.btn}>
                    {t('footer:banner.btn')}
                </Button>
            </div>
            <div className={css.icon}>
                <img className={css.icon__sphere_left} src="/images/footer/sphere-left.png" alt={'sphere'} />
                <img className={css.icon__sphere_mid} src="/images/footer/sphere-mid.png" alt={'sphere'} />
                <img className={css.icon__sphere_right} src="/images/footer/sphere-right.png" alt={'sphere'} />
            </div>
        </div>
    );
};

export default withTranslation(namespacesRequired)(Banner);
