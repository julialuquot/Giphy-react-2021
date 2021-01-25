import React from 'react';
import { useTranslation } from '@i18n';
import Text from '@components/common/Text/Text';
import Button from '@components/common/Button/Button';
import css from './BrandCardDetails.module.scss';

type CardProps = {
    cardImg: string;
    cardColor: string;
    cardTitle: string;
    cardSubtitle: {
        partnerCategoryID: number;
        namePC: string;
    }[];
    cardText: string;
    partnerType: string;
    siteUrl: string;
};

const BrandCardDetails = ({
    cardImg,
    cardColor,
    cardTitle,
    cardSubtitle,
    cardText,
    siteUrl,
    partnerType,
}: CardProps) => {
    const { t } = useTranslation('lpc-partner-details');

    const leftStyle = {
        backgroundColor: cardColor,
    };

    return (
        <div className={css.card}>
            <div className={css.card__left} style={leftStyle}>
                <img src={cardImg} alt={cardTitle} />
            </div>
            <div className={css.card__right}>
                <a rel="noreferrer" target="_blank" href={siteUrl}>
                    <Button
                        customClass={css.card__right__cta}
                        icon={'/front-static/icons/action/external-link.svg'}
                        variant={'secondary'}
                    >
                        {t('lpc-partner-details:brand.cta')}
                    </Button>
                </a>

                <h5>{cardTitle}</h5>
                <div className={css.card__right__category}>
                    {cardSubtitle.map((category) => (
                        <div key={category.partnerCategoryID}>
                            <Text
                                variant={'caption__00'}
                                color={'ui-secondary'}
                                customClass={css.card__right__category__txt}
                            >
                                {category.namePC}
                            </Text>
                        </div>
                    ))}
                </div>

                <div className={css.card__right__purchase}>
                    <span>
                        <p> {t(`lpc-partner-details:type.${partnerType}`)}</p>
                    </span>
                </div>

                <Text variant={'body_00'} color={'txt-primary'} customClass={css.card__text}>
                    {cardText}
                </Text>
            </div>
        </div>
    );
};

export default BrandCardDetails;
