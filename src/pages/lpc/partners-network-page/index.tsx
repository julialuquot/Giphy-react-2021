import React from 'react';
import { useTranslation } from '@i18n';
import Head from 'next/head';
import Layout from '@components/lpc/layout/Layout';
import Favorites from '@components/lpc/PartnersNetwork/Fav/Favorites/Favorites';
import MainHeading from '@components/common/Heading/MainHeading/MainHeading';
import CurrentOffers from '@components/lpc/PartnersNetwork/Offers/CurrentOffers/CurrentOffers';
import FaqCollapsible from '@components/common/Collapsible/FaqCollapsible/FaqCollapsible';
import css from './PartnersNetworkPage.module.scss';
import Partners from '@components/lpc/PartnersNetwork/Partners/Partners';
import BusinessBanner from '@components/common/BuisinessBanner/BusinessBanner';

const PartnersNetworkPage = () => {
    const { t } = useTranslation(['lpc-partners-network', 'lpc-footer']);

    // TODO remove fake data
    const faq = [
        {
            question: t('lpc-partners-network:faq.question_0'),
            answer: t('lpc-partners-network:faq.answer_0'),
        },
        {
            question: t('lpc-partners-network:faq.question_1'),
            answer: t('lpc-partners-network:faq.answer_1'),
        },
    ];

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
                <Partners />
                <FaqCollapsible
                    title={t('lpc-partners-network:faq.title')}
                    subtitle={t('lpc-partners-network:faq.subtitle')}
                    cta={t('lpc-partners-network:faq.cta')}
                    content={faq}
                />
                <BusinessBanner
                    title={t('lpc-footer:banner.title')}
                    description={t('lpc-footer:banner.text')}
                    buttonLabel={t('lpc-footer:banner.btn')}
                />
            </div>
        </Layout>
    );
};

export default PartnersNetworkPage;
