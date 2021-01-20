import React, { useContext, useEffect } from 'react';
import Brand from '@components/dashboard/Informations/Section-brand/Brand/Brand';
import InformationsContext from '@components/dashboard/context/informations/InformationsContext';
import InformationsService from '@services/domain/Dashboard/InformationsService';
import { useTranslation } from '@i18n';
import { useToasts } from 'react-toast-notifications';

type BrandContainerProps = {
    partnerUniq: string;
};

const BrandContainer = ({ partnerUniq }: BrandContainerProps) => {
    const { addToast } = useToasts();
    const { t } = useTranslation('common');

    const informationsContext = useContext(InformationsContext);
    const {
        getBrand,
        updateBrand,
        brand,
        isFetching,
        error,
        showNotificationSuccess,
        getChanges,
    } = informationsContext;

    useEffect(() => {
        getBrand(partnerUniq);
    }, [getBrand, partnerUniq]);

    useEffect(() => {
        error &&
            addToast(t(`common:errors.${error}`), {
                appearance: 'error',
                autoDismiss: true,
            });
    }, [addToast, error, t]);

    useEffect(() => {
        showNotificationSuccess.updateBrand &&
            addToast(t(`common:success.UPDATE_SUCCESS`), {
                appearance: 'success',
                autoDismiss: true,
            });
    }, [addToast, error, showNotificationSuccess.updateBrand, t]);

    const onUpdateBrand = async (body) => {
        await updateBrand(body);
        getChanges(body.partnerUniq);
    };

    const onResetBrand = (body) => {
        InformationsService.resetBrand(body)
            .then(() => getBrand(partnerUniq))
            .catch((err) => err);
    };

    return (
        <>
            {brand && (
                <Brand
                    name={brand.name}
                    logo={brand.logo}
                    color={brand.color}
                    background={brand.background}
                    url={brand.siteUrl}
                    description={brand.description?.fr}
                    mentions={brand.mentions?.fr}
                    onUpdateBrand={(body) => onUpdateBrand(body)}
                    onResetBrand={(body) => onResetBrand(body)}
                    partnerUniq={partnerUniq}
                    isFetching={isFetching}
                />
            )}
        </>
    );
};

export default BrandContainer;
