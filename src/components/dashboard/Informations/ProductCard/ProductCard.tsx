import React, { useState } from 'react';
import css from './ProductCard.module.scss';
import Text from '@components/common/Text/Text';
import { Form, Formik } from 'formik';
import Input from '@components/common/Formik/FormikInputField';
import Button from '@components/common/Button/Button';
import { useTranslation } from '@i18n';
import ImageUpload from '@components/dashboard/Informations/ImageUpload/ImageUpload';
import { updateProductsSchema } from '@validations/products';

type ProductCardProps = {
    title: string;
    description: string;
    price: string;
    order: number;
    image: string;
    onUpdateProduct: ({ title, desc, price, order, image }) => void;
    merchantUniq: string;
};

const ProductCard = ({ title, description, price, order, image, onUpdateProduct, merchantUniq }: ProductCardProps) => {
    const { t } = useTranslation('informations');

    const [isEditing, setIsEditing] = useState(false);
    const [imgUrl, setImgUrl] = useState('');

    const onEdit = () => {
        setIsEditing(true);
    };

    const getInitialValues = () => {
        return {
            title: title,
            description: description,
            image: image,
            order: order,
            price: price,
            merchantUniq: merchantUniq,
        };
    };

    const onSubmit = async (values) => {
        const body = {
            ...values,
            image: imgUrl !== '' ? imgUrl : image,
        };

        setIsEditing(false);
        onUpdateProduct(body);
    };

    const onCancel = () => {
        setIsEditing(false);
        setImgUrl('');
    };

    // eslint-disable-next-line react/prop-types
    const renderTutorialForm = ({ handleReset }) => {
        return (
            <Form className={css.form}>
                <div className={css.form__upload}>
                    <ImageUpload
                        cta={t('informations:products.add-visual')}
                        inputName={'image'}
                        format={t('informations:products.format')}
                        imgUrl={imgUrl !== '' ? imgUrl : image}
                        onUploadImg={(url) => setImgUrl(url)}
                        width={'255px'}
                        height={'382px'}
                    />
                </div>

                <div className={css.form__content}>
                    <div className={css.form__input}>
                        <Input
                            name="title"
                            type="text"
                            label={t('informations:products.title-label')}
                            placeholder={t('informations:products.title-placeholder')}
                        />
                    </div>

                    <div className={css.form__input}>
                        <Input
                            name="description"
                            type="textarea"
                            label={t('informations:products.desc-label')}
                            placeholder={t('informations:products.desc-placeholder')}
                        />
                    </div>
                    <div className={css.form__input}>
                        <Input
                            name="price"
                            type="text"
                            label={t('informations:products.price-label')}
                            placeholder={t('informations:products.price-placeholder')}
                        />
                    </div>

                    <p className={css.form__reset} onClick={handleReset}>
                        {t('informations:brand.reset')}
                    </p>

                    <div className={css.form__btn}>
                        <Button
                            margin={'0 10px 0 0'}
                            variant="secondary"
                            size="small"
                            onClick={() => onCancel()}
                            type={'button'}
                        >
                            {t('informations:btn.cancel')}
                        </Button>
                        <Button variant="primary" size="small" type="submit">
                            {t('informations:btn.validate')}
                        </Button>
                    </div>
                </div>
            </Form>
        );
    };

    return (
        <>
            <div className={css.product}>
                <span
                    onClick={() => onEdit()}
                    className={`${css.product__icon} ${isEditing && css.product__icon__editing}`}
                />
                {!isEditing ? (
                    <>
                        <h5> {t('informations:products.product.product', { order })}</h5>
                        <div className={css.product__content}>
                            <div
                                className={css.product__content__img}
                                style={{
                                    backgroundImage: `url(${imgUrl || image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            />
                            <div className={css.product__content__informations}>
                                <h6>{title}</h6>
                                <Text variant={'body_00'} color={'ui-secondary'}>
                                    {description}
                                </Text>
                                <span>
                                    {price} {t('informations:products.product.euro')}
                                </span>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h5> {t('informations:products.product.product', { order })}</h5>
                        <Formik
                            validationSchema={updateProductsSchema}
                            initialValues={getInitialValues()}
                            onSubmit={(values) => onSubmit(values)}
                        >
                            {(values) => renderTutorialForm(values)}
                        </Formik>
                    </>
                )}
            </div>
        </>
    );
};

export default ProductCard;
