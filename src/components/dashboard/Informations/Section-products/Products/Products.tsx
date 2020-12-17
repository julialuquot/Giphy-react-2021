import React, { useContext, useEffect } from 'react';
import css from './Products.module.scss';
import Banner from '@components/dashboard/Informations/Banner/Banner';
import { useTranslation } from '@i18n';
import ProductCard from '@components/dashboard/Informations/Section-products/ProductCard/ProductCard';
import Introduction from '@components/dashboard/Informations/Section-products/Introduction/Introduction';
import InformationsContext from '@components/dashboard/context/informations/InformationsContext';
import InformationsService from '@services/domain/InformationsService';
import { useToasts } from 'react-toast-notifications';

type ProductsProps = {
    partnerUniq: string;
};

const Products = ({ partnerUniq }: ProductsProps) => {
    const { t } = useTranslation('dashboard-informations');
    const { addToast } = useToasts();

    const informationsContext = useContext(InformationsContext);
    const {
        getProducts,
        updateProduct,
        products,
        getProductsIntroduction,
        updateProductsIntroduction,
        productsIntroduction,
        isFetching,
        error,
        showNotificationSuccess,
    } = informationsContext;

    useEffect(() => {
        getProducts(partnerUniq);
    }, [getProducts, partnerUniq]);

    useEffect(() => {
        getProductsIntroduction(partnerUniq);
    }, [getProductsIntroduction, partnerUniq]);

    useEffect(() => {
        error &&
            addToast(t(`common:errors.${error}`), {
                appearance: 'error',
                autoDismiss: true,
            });
    }, [addToast, error, t]);

    useEffect(() => {
        showNotificationSuccess.updateProduct &&
            addToast(t(`common:success.UPDATE_SUCCESS`), {
                appearance: 'success',
                autoDismiss: true,
            });
    }, [addToast, error, showNotificationSuccess.updateProduct, t]);

    useEffect(() => {
        showNotificationSuccess.updateProductsIntroduction &&
            addToast(t(`common:success.UPDATE_SUCCESS`), {
                appearance: 'success',
                autoDismiss: true,
            });
    }, [addToast, error, showNotificationSuccess.updateProductsIntroduction, t]);

    const onUpdateProduct = (body) => {
        updateProduct(body);
    };

    const onUpdateIntroduction = (body) => {
        updateProductsIntroduction(body);
    };

    const onResetProduct = (body) => {
        InformationsService.resetProduct(body)
            .then(() => getProducts(partnerUniq))
            .catch((err) => err);
    };

    return (
        <div className={css.tutorial}>
            <Banner text={t('dashboard-informations:products.banner.text')} />

            <Introduction
                onUpdateIntroduction={(body) => onUpdateIntroduction(body)}
                productsIntroduction={productsIntroduction?.fr}
                isFetching={isFetching}
                partnerUniq={partnerUniq}
            />

            {products &&
                products.map((product) => {
                    return (
                        <ProductCard
                            key={product.order}
                            title={product.title?.fr}
                            description={product.description?.fr}
                            price={product.price}
                            order={product.order}
                            image={product.image}
                            onUpdateProduct={(body) => onUpdateProduct(body)}
                            onResetProduct={(body) => onResetProduct(body)}
                            partnerUniq={partnerUniq}
                            isFetching={isFetching}
                        />
                    );
                })}
        </div>
    );
};

export default Products;
