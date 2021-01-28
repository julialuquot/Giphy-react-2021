import React from 'react';
import Head from 'next/head';
import { useTranslation } from '@i18n';
import PartnersService from '@services/domain/Lpc/PartnersService';
import PartnerBrand from '@components/lpc/Partners/Brand/PartnerBrand';
import Layout from '@components/lpc/layout/Layout';
import HowItWorks from '@components/lpc/Partners/HowItWorks/HowItWorks';
import Products from '@components/lpc/Partners/Products/Products';
import PurchasingType from '@components/lpc/Partners/PurchasingType/PurchasingType';
import {
    brand,
    howItWorks,
    categories,
    products,
    productIntroduction,
    offerValues,
} from '../../../../propTypes/partnerDetailsTypes';
import css from './partner-details-page.module.scss';

type PartnerDetailsPageProps = {
    partnerDetails: {
        brand: brand;
        howItWorks: howItWorks[];
        products: products[];
        categories: categories[];
        productsIntroduction?: productIntroduction;
        OffersValues?: offerValues[];
        typePartner: string;
    };
};

const PartnerDetailsPage = ({ partnerDetails }: PartnerDetailsPageProps) => {
    const { t } = useTranslation('lpc-partner-details');

    return (
        <Layout>
            <Head>
                <title>{t('lpc-partners-network:meta-title')}</title>
            </Head>
            {partnerDetails && (
                <div className={css.partnerDetailsPageWrapper}>
                    <PartnerBrand
                        partnerType={partnerDetails?.typePartner}
                        brand={partnerDetails?.brand}
                        categories={partnerDetails?.categories}
                    />
                    <HowItWorks tutorial={partnerDetails?.howItWorks} />
                    <Products
                        brandName={partnerDetails?.brand.name}
                        products={partnerDetails?.products}
                        productsIntroduction={partnerDetails?.productsIntroduction}
                        brandColor={partnerDetails?.brand.color}
                    />
                    <PurchasingType
                        partnerLink={partnerDetails?.brand.siteUrl}
                        partnerType={partnerDetails?.typePartner}
                        offersValues={partnerDetails?.OffersValues}
                        brandLogo={partnerDetails?.brand.logo}
                        brandColor={partnerDetails?.brand.color}
                        brandBackground={partnerDetails?.brand.background}
                    />
                </div>
            )}
        </Layout>
    );
};

export default PartnerDetailsPage;

export const getServerSideProps = async (ctx) => {
    const partnerRef = await ctx.query.reference;
    const partnerDetails = await PartnersService.getPartnerDetails(partnerRef);

    return {
        props: {
            partnerDetails,
        },
    };
};
