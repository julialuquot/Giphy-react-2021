import React, { useContext, useEffect } from 'react';
import Brand from '@components/dashboard/Informations/Brand/Brand';
import InformationsContext from '@components/dashboard/context/informations/InformationsContext';
import InformationsService from '@services/domain/InformationsService';
import { useTranslation } from '@i18n';
import { useToasts } from 'react-toast-notifications';

type BrandContainerProps = {
    user: { merchantUniq: string };
};

const BrandContainer = ({ user }: BrandContainerProps) => {
    const { addToast } = useToasts();
    const { t } = useTranslation('common');

    const informationsContext = useContext(InformationsContext);
    const { getBrand, updateBrand, brand, isFetching, error } = informationsContext;

    useEffect(() => {
        getBrand(user.merchantUniq);
    }, [getBrand, user.merchantUniq]);

    useEffect(() => {
        error &&
            addToast(t(`common:errors.${error}`), {
                appearance: 'error',
                autoDismiss: true,
            });
    }, [addToast, error, t]);

    const onUpdateBrand = (body) => {
        updateBrand(body);
    };

    const onResetBrand = (body) => {
        InformationsService.resetBrand(body)
            .then(() => getBrand(user.merchantUniq))
            .catch((err) => err);
    };

    return (
        <>
            {brand && (
                <Brand
                    name={brand.name}
                    logo={brand.logo}
                    color={brand.color}
                    url={brand.siteUrl}
                    description={brand.description}
                    mentions={brand.mentions}
                    onUpdateBrand={(body) => onUpdateBrand(body)}
                    onResetBrand={(body) => onResetBrand(body)}
                    merchantUniq={user.merchantUniq}
                    isFetching={isFetching}
                />
            )}
        </>
    );
};

export default BrandContainer;
