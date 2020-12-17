import React from 'react';
import css from './CurrentOffers.module.scss';
import Text from '@components/common/Text/Text';
import { useTranslation } from '@i18n';
import SwipeOffers from '@components/lpc/PartnersNetwork/Offers/SwipeOffers/SwipeOffers';

const CurrentOffers = () => {
    const { t } = useTranslation('lpc-partners-network');

    const offers = [
        {
            brand: 'Zalendo',
            category: 'Pret à porter',
            desc:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et hendrerit magna. Nullam pulvinar arcu at rutrum porta. Vivamus malesuada vulputate urna, id rhoncus lectus venenatis vitae.',
            imgSrc: 'https://source.unsplash.com/random/523*356',
        },
        {
            brand: 'Decathlon',
            category: 'Pret à porter',
            desc:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et hendrerit magna. Nullam pulvinar arcu at rutrum porta. Vivamus malesuada vulputate urna, id rhoncus lectus venenatis vitae.',
            imgSrc: 'https://source.unsplash.com/random/523*356',
        },
        {
            brand: 'Toto',
            category: 'Pret à porter',
            desc:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et hendrerit magna. Nullam pulvinar arcu at rutrum porta. Vivamus malesuada vulputate urna, id rhoncus lectus venenatis vitae.',
            imgSrc: 'https://source.unsplash.com/random/523*356',
        },
    ];

    return (
        <div className={css.offers}>
            <div className={css.offers__title}>
                <h2>{t('lpc-partners-network:offers.title')}</h2>
                <Text customClass={css.offers__title__txt} variant={'body_00'} color={'txt-primary'}>
                    {t('lpc-partners-network:offers.subtitle')}
                </Text>
            </div>
            <SwipeOffers offers={offers} />
        </div>
    );
};

export default CurrentOffers;
