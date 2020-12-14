import React, { useState } from 'react';
import css from './Introduction.module.scss';
import { useTranslation } from '@i18n';
import { Form, Formik } from 'formik';
import { updateProductIntroductionSchema } from '@validations/products';
import Input from '@components/common/Formik/FormikInputField';
import Button from '@components/common/Button/Button';
import Text from '@components/common/Text/Text';
import Spinner from '@components/common/Spinner/Spinner';

type IntroductionProps = {
    productsIntroduction: string;
    onUpdateIntroduction: (body: object) => void;
    partnerUniq: string;
    isFetching: boolean;
};

const Introduction = ({ partnerUniq, productsIntroduction, onUpdateIntroduction, isFetching }: IntroductionProps) => {
    const { t } = useTranslation('informations');

    const [isEditing, setIsEditing] = useState(false);

    const onEdit = () => {
        setIsEditing(true);
    };

    const getInitialValues = () => {
        return {
            productsIntroduction: productsIntroduction,
            partnerUniq: partnerUniq,
        };
    };

    const onSubmit = async (values) => {
        const body = {
            ...values,
            productsIntroduction: {
                fr: values.productsIntroduction,
                en: values.productsIntroduction,
            },
        };

        setIsEditing(false);
        onUpdateIntroduction(body);
    };

    const onCancel = () => {
        setIsEditing(false);
    };

    const renderIntroductionForm = () => {
        return (
            <Form className={css.form}>
                <div className={css.form__content}>
                    <div className={css.form__input}>
                        <Input
                            name="productsIntroduction"
                            type="textarea"
                            placeholder={t('dashboard-informations:products.desc-placeholder')}
                        />
                    </div>

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
        <div className={css.introduction}>
            {isFetching ? (
                <Spinner height={'60px'} width={'60px'} />
            ) : (
                <>
                    <span
                        onClick={() => onEdit()}
                        className={`${css.introduction__icon} ${isEditing && css.introduction__icon__editing}`}
                    />
                    {!isEditing ? (
                        <>
                            <h5>{t('dashboard-informations:products.introduction.title')}</h5>
                            <Text variant={'caption_01'} color={'ui-secondary'}>
                                {productsIntroduction || t('dashboard-informations:products.introduction.desc')}
                            </Text>
                        </>
                    ) : (
                        <>
                            <h5>{t('dashboard-informations:products.introduction.title')}</h5>
                            <Formik
                                validationSchema={updateProductIntroductionSchema}
                                initialValues={getInitialValues()}
                                onSubmit={(values) => onSubmit(values)}
                            >
                                {() => renderIntroductionForm()}
                            </Formik>
                        </>
                    )}
                </>
            )}
        </div>
    );
};
export default Introduction;
