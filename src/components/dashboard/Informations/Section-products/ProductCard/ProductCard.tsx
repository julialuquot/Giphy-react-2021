import React, { useState } from 'react';
import css from './ProductCard.module.scss';
import Text from '@components/common/Text/Text';
import { Form, Formik } from 'formik';
import Input from '@components/common/Formik/FormikInputField';
import Button from '@components/common/Button/Button';
import { useTranslation } from '@i18n';
import ImageUpload from '@components/dashboard/Informations/ImageUpload/ImageUpload';
import { updateProductsSchema } from '@validations/products';
import Spinner from '@components/common/Spinner/Spinner';

type ProductCardProps = {
    title: string;
    description: string;
    price: string;
    order: number;
    image: string;
    onUpdateProduct: (body: object) => void;
    onResetProduct: (body: object) => void;
    partnerUniq: string;
    isFetching: boolean;
};

const ProductCard = ({
    title,
    description,
    price,
    order,
    image,
    onUpdateProduct,
    onResetProduct,
    partnerUniq,
    isFetching,
}: ProductCardProps) => {
    const { t } = useTranslation('dashboard-informations');

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
            partnerUniq: partnerUniq,
        };
    };

    const onSubmit = async (values) => {
        const body = {
            ...values,
            image: imgUrl !== '' ? imgUrl : image,
            title: {
                fr: values.title,
                en: values.title,
            },
            description: {
                fr: values.description,
                en: values.description,
            },
        };

        setIsEditing(false);
        onUpdateProduct(body);
    };

    const onReset = () => {
        const body = { partnerUniq: partnerUniq, reset: true, order: order };
        onResetProduct(body);
    };

    const onCancel = () => {
        setIsEditing(false);
        setImgUrl('');
    };

    const renderTutorialForm = () => {
        return (
            <Form className={css.form}>
                <div className={css.form__upload}>
                    <ImageUpload
                        cta={t('dashboard-informations:products.add-visual')}
                        inputName={'image'}
                        format={t('dashboard-informations:products.format')}
                        fileSizeLimit={1000000}
                        fileWidthLimit={600}
                        fileHeightLimit={600}
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
                            label={t('dashboard-informations:products.title-label')}
                            placeholder={t('dashboard-informations:products.title-placeholder')}
                        />
                    </div>

                    <div className={css.form__input}>
                        <Input
                            name="description"
                            type="textarea"
                            label={t('dashboard-informations:products.desc-label')}
                            placeholder={t('dashboard-informations:products.desc-placeholder')}
                        />
                    </div>
                    <div className={css.form__input}>
                        <Input
                            name="price"
                            type="text"
                            label={t('dashboard-informations:products.price-label')}
                            placeholder={t('dashboard-informations:products.price-placeholder')}
                        />
                    </div>

                    <p className={css.form__reset} onClick={onReset}>
                        {t('dashboard-informations:brand.reset')}
                    </p>

                    <div className={css.form__btn}>
                        <Button
                            margin={'0 10px 0 0'}
                            variant="secondary"
                            size="small"
                            onClick={() => onCancel()}
                            type={'button'}
                        >
                            {t('dashboard-informations:btn.cancel')}
                        </Button>
                        <Button variant="primary" size="small" type="submit" isLoading={isFetching}>
                            {t('dashboard-informations:btn.validate')}
                        </Button>
                    </div>
                </div>
            </Form>
        );
    };

    return (
        <>
            <div className={css.product}>
                {isFetching ? (
                    <Spinner height={'60px'} width={'60px'} />
                ) : (
                    <>
                        <span
                            onClick={() => onEdit()}
                            className={`${css.product__icon} ${isEditing && css.product__icon__editing}`}
                        />

                        {!isEditing ? (
                            <>
                                <h5> {t('dashboard-informations:products.product.product', { order })}</h5>
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
                                        <h5>{title || t('dashboard-informations:products.product.title')}</h5>
                                        <Text variant={'caption_00'} color={'ui-secondary'}>
                                            {description || t('dashboard-informations:products.product.desc')}
                                        </Text>
                                        <span>
                                            {price || t('dashboard-informations:products.product.price')}
                                            {t('dashboard-informations:products.product.euro')}
                                        </span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <h5> {t('dashboard-informations:products.product.product', { order })}</h5>
                                <Formik
                                    validationSchema={updateProductsSchema}
                                    initialValues={getInitialValues()}
                                    onSubmit={(values) => onSubmit(values)}
                                >
                                    {() => renderTutorialForm()}
                                </Formik>
                            </>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default ProductCard;
