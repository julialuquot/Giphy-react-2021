import React from 'react';
import css from './PartnerBrand.module.scss';
import BrandCardDetails from '@components/lpc/Partners/BrandCardDetails/BrandCardDetails';

type PartnerBrandProps = {
    brand: {
        name: string;
        logo: string;
        siteUrl: string;
        color: string;
        description: { fr: string; en: string };
        mentions: { fr: string; en: string };
        background: string;
    };
    partnerType: string;
    categories: {
        partnerCategoryID: number;
        namePC: string;
    }[];
};

const PartnerBrand = ({ brand, partnerType, categories }: PartnerBrandProps) => {
    return (
        <div className={css.brand} style={{ backgroundImage: `url(${brand.background})` }}>
            <BrandCardDetails
                cardText={brand.description?.fr}
                cardColor={brand.color}
                cardImg={brand.logo}
                cardSubtitle={categories}
                cardTitle={brand.name}
                partnerType={partnerType}
                siteUrl={brand.siteUrl}
            />
        </div>
    );
};

export default PartnerBrand;
