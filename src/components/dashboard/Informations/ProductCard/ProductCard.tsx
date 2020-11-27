import React, { useContext, useState } from 'react';
import css from './ProductCard.module.scss';
import Text from '@components/common/Text/Text';
import { Form, Formik } from 'formik';
import InformationsContext from '@components/dashboard/context/informations/InformationsContext';
import Input from '@components/common/Formik/FormikInputField';
import Button from '@components/common/Button/Button';
import { useTranslation } from '@i18n';
import ImageUpload from '@components/dashboard/Informations/ImageUpload/ImageUpload';
import { updateTutorial } from '@validations/tutorial';

type ProductCardProps = {
    name: string;
    title: string;
    desc: string;
    price: string;
};

const ProductCard = ({ name, title, desc, price }: ProductCardProps) => {
    const { t } = useTranslation('informations');

    const [isEditing, setIsEditing] = useState(false);

    const onEdit = () => {
        setIsEditing(true);
    };

    const informationsContext = useContext(InformationsContext);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
    const { isFetching, error, brand } = informationsContext;

    const [imgUrl, setImgUrl] = useState('');

    const getInitialValues = () => {
        return {
            title: '',
            description: '',
            imageDesktop: '',
            imageMobile: '',
            order: '',
            merchant: '',
        };
    };

    const onSubmit = async (values) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
        const data = {
            ...values,
        };

        setIsEditing(false);
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
                        inputName={'imageDesktop'}
                        format={t('informations:products.format')}
                        imgUrl={imgUrl}
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
                        <h5>{name}</h5>
                        <div className={css.product__content}>
                            <div className={css.product__content__img}></div>
                            <div className={css.product__content__informations}>
                                <h6>{title}</h6>
                                <Text variant={'body_00'} color={'ui-primary'}>
                                    {desc}
                                </Text>
                                <span>{price}</span>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h5>{name}</h5>
                        <Formik
                            validationSchema={updateTutorial}
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
