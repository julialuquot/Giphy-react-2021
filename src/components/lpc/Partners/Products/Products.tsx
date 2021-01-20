import React from 'react';
import css from './Products.module.scss';
import Text from '@components/common/Text/Text';
import { useTranslation } from '@i18n';

type ProductsProps = {
    products: {
        description?: { fr: string; en: string };
        title?: { fr: string; en: string };
        image?: string;
        price?: number;
        order: number;
    }[];
    productsIntroduction?: { fr: string; en: string };
    brandName: string;
};

const Products = ({ products, productsIntroduction, brandName }: ProductsProps) => {
    const { t } = useTranslation('lpc-partner-details');

    return (
        <div className={css.products}>
            <h2>
                {t('lpc-partner-details:products.title')} {brandName}
            </h2>
            <Text customClass={css.wrapper__content__txt} variant={'body_00'} color={'txt-primary'}>
                {productsIntroduction?.fr}
            </Text>
            <div className={css.grid}>
                {products.map((item) => (
                    <div
                        key={item.order}
                        className={css.grid__product}
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        <div className={css.grid__product__details}>
                            <Text variant={'caption_00'} color={'txt-primary'}>
                                {item.title?.fr}
                            </Text>
                            <Text variant={'caption_00'} color={'txt-secondary'}>
                                {item.description?.fr}
                            </Text>
                            <span>{item.price} €</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;