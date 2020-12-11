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
    user: { partnerUniq: string };
};

const Products = ({ user }: ProductsProps) => {
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
        getProducts(user.partnerUniq);
    }, [getProducts, user.partnerUniq]);

    useEffect(() => {
        getProductsIntroduction(user.partnerUniq);
    }, [getProductsIntroduction, user.partnerUniq]);

    // console.log('----->', products);
    // console.log('----->', productsIntroduction);

    useEffect(() => {
        error &&
            addToast(t(`common:errors.${error}`), {
                appearance: 'error',
                autoDismiss: true,
            });
    }, [addToast, error, t]);

    useEffect(() => {
        showNotificationSuccess &&
            addToast(t(`common:success.UPDATE_SUCCESS`), {
                appearance: 'success',
                autoDismiss: true,
            });
    }, [addToast, error, showNotificationSuccess, t]);

    const onUpdateProduct = (body) => {
        updateProduct(body);
    };

    const onUpdateIntroduction = (body) => {
        updateProductsIntroduction(body);
    };

    const onResetProduct = (body) => {
        InformationsService.resetProduct(body)
            .then(() => getProducts(user.partnerUniq))
            .catch((err) => err);
    };

    return (
        <div className={css.tutorial}>
            <Banner text={t('dashboard-informations:products.banner.text')} />

            {productsIntroduction && (
                <Introduction
                    onUpdateIntroduction={(body) => onUpdateIntroduction(body)}
                    productsIntroduction={productsIntroduction?.fr}
                    isFetching={isFetching}
                    partnerUniq={user.partnerUniq}
                />
            )}

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
                            partnerUniq={user.partnerUniq}
                            isFetching={isFetching}
                        />
                    );
                })}
        </div>
    );
};

export default Products;
