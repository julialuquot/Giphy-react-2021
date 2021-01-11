import React, { useState } from 'react';
import Head from 'next/head';
import PartnerBrand from '@components/lpc/Partners/Brand/PartnerBrand';
import Layout from '@components/lpc/layout/Layout';
import { useTranslation } from '@i18n';
import { mockPartnerDetails } from '@components/lpc/Partners/mockPartnerDetails';
import HowItWorks from '@components/lpc/Partners/HowItWorks/HowItWorks';
import Products from '@components/lpc/Partners/Products/Products';
import css from './partner-details-page.module.scss';

const PartnerDetailsPage = () => {
    const { t } = useTranslation('lpc-partner-details');

    const [brand] = useState(mockPartnerDetails.brand);
    const [partnerType] = useState(mockPartnerDetails.typePartner);
    const [tutorial] = useState(mockPartnerDetails.howItWorks);
    const [products] = useState(mockPartnerDetails.products);
    const [productsIntroduction] = useState(mockPartnerDetails.productsIntroduction);

    return (
        <Layout>
            <Head>
                <title>{t('lpc-partners-network:meta-title')}</title>
            </Head>
            <div className={css.partnerDetailsPageWrapper}>
                <PartnerBrand partnerType={partnerType} brand={brand} />
                <HowItWorks tutorial={tutorial} />
                <Products brandName={brand.name} products={products} productsIntroduction={productsIntroduction} />
            </div>
        </Layout>
    );
};

export default PartnerDetailsPage;
