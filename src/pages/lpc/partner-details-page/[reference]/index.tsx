import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useTranslation } from '@i18n';
import { useToasts } from 'react-toast-notifications';
import PartnersService from '@services/domain/PartnersService';
import PartnerBrand from '@components/lpc/Partners/Brand/PartnerBrand';
import Layout from '@components/lpc/layout/Layout';
import HowItWorks from '@components/lpc/Partners/HowItWorks/HowItWorks';
import Products from '@components/lpc/Partners/Products/Products';
import css from './partner-details-page.module.scss';

type PartnerDetailsPageProps = {
    partnerRef: string;
};

const PartnerDetailsPage = ({ partnerRef }: PartnerDetailsPageProps) => {
    const { t } = useTranslation('lpc-partner-details');
    const { addToast } = useToasts();

    const [partnerDetails, setPartnerDetails] = useState(null);
    const [isFetchingPartnerDetails, setIsFetchingPartnerDetails] = useState(false);

    useEffect(() => {
        setIsFetchingPartnerDetails(true);
        PartnersService.getPartnerDetails(partnerRef)
            .then((res) => setPartnerDetails(res.data))
            .catch((err) =>
                addToast(t(`common:errors.${err.message}`), {
                    appearance: 'error',
                    autoDismiss: true,
                }),
            )
            .finally(() => setIsFetchingPartnerDetails(false));
    }, [partnerRef]);

    return (
        <Layout>
            <Head>
                <title>{t('lpc-partners-network:meta-title')}</title>
            </Head>
            {!isFetchingPartnerDetails && partnerDetails && (
                <div className={css.partnerDetailsPageWrapper}>
                    <PartnerBrand partnerType={partnerDetails?.typePartner} brand={partnerDetails?.brand} />
                    <HowItWorks tutorial={partnerDetails?.howItWorks} />
                    <Products
                        brandName={partnerDetails?.brand.name}
                        products={partnerDetails?.products}
                        productsIntroduction={partnerDetails?.productsIntroduction}
                    />
                </div>
            )}
        </Layout>
    );
};
PartnerDetailsPage.getInitialProps = async (ctx) => {
    const partnerRef = await ctx.query.reference;

    return { partnerRef };
};

export default PartnerDetailsPage;
