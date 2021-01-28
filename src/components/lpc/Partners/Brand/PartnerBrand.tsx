import React from 'react';
import BrandCardDetails from '@components/lpc/Partners/BrandCardDetails/BrandCardDetails';
import { brand, categories } from '../../../../propTypes/partnerDetailsTypes';
import css from './PartnerBrand.module.scss';

type PartnerBrandProps = {
    brand: brand;
    categories: categories[];
    partnerType: string;
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
