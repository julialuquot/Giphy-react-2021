import React, { useContext, useEffect } from 'react';
import css from './Products.module.scss';
import Banner from '@components/dashboard/Informations/Banner/Banner';
import { useTranslation } from '@i18n';
import ProductCard from '@components/dashboard/Informations/ProductCard/ProductCard';
import Introduction from '@components/dashboard/Informations/Introduction/Introduction';
import InformationsContext from '@components/dashboard/context/informations/InformationsContext';

type ProductsProps = {
    user: { merchantUniq: string };
};

const Products = ({ user }: ProductsProps) => {
    const { t } = useTranslation('informations');

    const informationsContext = useContext(InformationsContext);
    const { getProducts, updateProduct, products, isFetching } = informationsContext;

    useEffect(() => {
        getProducts(user.merchantUniq);
    }, []);

    const onUpdateProduct = (body) => {
        updateProduct(body);
    };

    return (
        <div className={css.tutorial}>
            <Banner text={t('informations:products.banner.text')} />
            <Introduction />

            {!isFetching &&
                products.length > 0 &&
                products.map((product) => {
                    return (
                        <ProductCard
                            key={product.order}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            order={product.order}
                            image={product.image}
                            onUpdateProduct={(body) => onUpdateProduct(body)}
                            merchantUniq={user.merchantUniq}
                        />
                    );
                })}
        </div>
    );
};

export default Products;
