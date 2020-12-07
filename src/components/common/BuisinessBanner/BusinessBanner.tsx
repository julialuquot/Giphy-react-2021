import React from 'react';
import css from './BusinessBanner.module.scss';
import Text from '@components/common/Text/Text';
import Button from '@components/common/Button/Button';
import Image from 'next/image';

type BusinessBannerProps = {
    title: string;
    description: string;
    buttonLabel: string;
};

const BusinessBanner = ({ title, description, buttonLabel }: BusinessBannerProps) => {
    return (
        <div className={css.banner}>
            <h5>{title}</h5>
            <Text variant={'body_02'} color={'ui-secondary'}>
                {description}
            </Text>
            <Button size={'medium'} variant={'primary'} width={'220px'} margin={'24px 0 0 0'}>
                {buttonLabel}
            </Button>
            <div className={css.banner__img}>
                <Image width={477} height={144} src="/front-static/images/hand-shake.png" alt="hand-shake" />
            </div>
        </div>
    );
};

export default BusinessBanner;
