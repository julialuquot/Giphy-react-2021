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
    };
    partnerType: string;
};

const PartnerBrand = ({ brand, partnerType }: PartnerBrandProps) => {
    return (
        <div className={css.brand} style={{ backgroundImage: `url('https://source.unsplash.com/random/500*500')` }}>
            <BrandCardDetails
                cardText={brand.description.fr}
                cardColor={brand.color}
                cardImg={brand.logo}
                cardSubtitle={brand.name}
                cardTitle={brand.name}
                partnerType={partnerType}
                siteUrl={brand.siteUrl}
            />
        </div>
    );
};

export default PartnerBrand;
