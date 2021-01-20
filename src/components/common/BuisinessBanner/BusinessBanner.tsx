import React from 'react';
import Text from '@components/common/Text/Text';
import Button from '@components/common/Button/Button';
import css from './BusinessBanner.module.scss';

type BusinessBannerProps = {
    title: string;
    description: string;
    buttonLabel: string;
};

const BusinessBanner = ({ title, description, buttonLabel }: BusinessBannerProps) => {
    return (
        <div className={css.banner}>
            <h4>{title}</h4>
            <Text variant={'body_01'} color={'ui-secondary'}>
                {description}
            </Text>
            <a target="_blank" rel="noreferrer" href="https://business.lepotcommun.fr">
                <Button customClass={css.banner__cta} size={'medium'} variant={'primary'} margin={'24px 0 0 0'}>
                    {buttonLabel}
                </Button>
            </a>
        </div>
    );
};

export default BusinessBanner;
