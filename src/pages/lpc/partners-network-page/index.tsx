import React from 'react';
import { useTranslation } from '@i18n';
import Head from 'next/head';
import Layout from '@components/lpc/layout/Layout';
import Favorites from '@components/lpc/PartnersNetwork/Fav/Favorites/Favorites';
import MainHeading from '@components/common/Heading/MainHeading/MainHeading';
import css from './PartnersNetworkPage.module.scss';
import CurrentOffers from '@components/lpc/PartnersNetwork/Offers/CurrentOffers/CurrentOffers';

const PartnersNetworkPage = () => {
    const { t } = useTranslation('lpc-partners-network');

    return (
        <Layout>
            <Head>
                <title>{t('lpc-partners-network:meta-title')}</title>
            </Head>
            <div className={css.partnersNetworkPageWrapper}>
                <MainHeading title={t('lpc-partners-network:title')} subtitle={t('lpc-partners-network:subtitle')} />
                <div className={css.background}>
                    <Favorites />
                    <CurrentOffers />
                </div>
            </div>
        </Layout>
    );
};

export default PartnersNetworkPage;
