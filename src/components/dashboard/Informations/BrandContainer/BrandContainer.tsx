import React, { useContext, useEffect } from 'react';
import Brand from '@components/dashboard/Informations/Brand/Brand';
import InformationsContext from '@components/dashboard/context/informations/InformationsContext';

type BrandContainerProps = {
    user: { merchantUniq: string };
};

const BrandContainer = ({ user }: BrandContainerProps) => {
    const informationsContext = useContext(InformationsContext);
    const { getBrand, updateBrand, brand, isFetching } = informationsContext;

    useEffect(() => {
        getBrand(user.merchantUniq);
    }, []);

    const onUpdateBrand = (body) => {
        updateBrand(body);
    };

    return (
        <>
            {!isFetching && Object.keys(brand).length > 0 && brand.constructor === Object && (
                <Brand
                    name={brand.name}
                    logo={brand.logo}
                    color={brand.color}
                    url={brand.siteUrl}
                    description={brand.description}
                    mentions={brand.mentions}
                    onUpdateBrand={(body) => onUpdateBrand(body)}
                    merchantUniq={user.merchantUniq}
                />
            )}
        </>
    );
};

export default React.memo(BrandContainer);
