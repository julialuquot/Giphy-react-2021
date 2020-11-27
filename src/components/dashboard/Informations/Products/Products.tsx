import React from 'react';
import css from './Products.module.scss';
import Banner from '@components/dashboard/Informations/Banner/Banner';
import { useTranslation } from '@i18n';
import ProductCard from '@components/dashboard/Informations/ProductCard/ProductCard';
import Introduction from '@components/dashboard/Informations/Introduction/Introduction';

const Products = () => {
    const { t } = useTranslation('informations');

    const mockStep = [
        {
            name: t('informations:products.product.product-one'),
            title: t('informations:products.product.title'),
            desc: t('informations:products.product.desc'),
            price: t('informations:products.product.price'),
        },
        {
            name: t('informations:products.product.product-two'),
            title: t('informations:products.product.title'),
            desc: t('informations:products.product.desc'),
            price: t('informations:products.product.price'),
        },
        {
            name: t('informations:products.product.product-three'),
            title: t('informations:products.product.title'),
            desc: t('informations:products.product.desc'),
            price: t('informations:products.product.price'),
        },
        {
            name: t('informations:products.product.product-four'),
            title: t('informations:products.product.title'),
            desc: t('informations:products.product.desc'),
            price: t('informations:products.product.price'),
        },
    ];

    return (
        <div className={css.tutorial}>
            <Banner text={t('informations:products.banner.text')} />
            <Introduction />

            {mockStep.map((product) => {
                return (
                    <ProductCard
                        key={product.name}
                        name={product.name}
                        title={product.title}
                        desc={product.desc}
                        price={product.price}
                    />
                );
            })}
        </div>
    );
};

export default Products;
