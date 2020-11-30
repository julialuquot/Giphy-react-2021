import React, { useState } from 'react';
import css from './Step.module.scss';
import Text from '@components/common/Text/Text';
import { Form, Formik } from 'formik';
import Input from '@components/common/Formik/FormikInputField';
import Button from '@components/common/Button/Button';
import { useTranslation } from '@i18n';
import ImageUpload from '@components/dashboard/Informations/ImageUpload/ImageUpload';
import { updateTutorialSchema } from '@validations/tutorial';

type StepProps = {
    title: string;
    description: string;
    order: number;
    imageDesktop: string;
    imageMobile: string;
    onUpdateTutorial: (body: object) => void;
    merchantUniq: string;
};

const Step = ({ title, description, order, imageDesktop, imageMobile, onUpdateTutorial, merchantUniq }: StepProps) => {
    const { t } = useTranslation('informations');

    const [isEditing, setIsEditing] = useState(false);
    const [desktopImgUrl, setDesktopImgUrl] = useState('');
    const [mobileImgUrl, setMobileImgUrl] = useState('');

    const onEdit = () => {
        setIsEditing(true);
    };

    const getInitialValues = () => {
        return {
            title: title,
            description: description,
            imageDesktop: imageDesktop,
            imageMobile: imageMobile,
            order: order,
            merchantUniq: merchantUniq,
        };
    };

    const onSubmit = async (values) => {
        const body = {
            ...values,
            imageDesktop: desktopImgUrl !== '' ? desktopImgUrl : imageDesktop,
            imageMobile: mobileImgUrl !== '' ? mobileImgUrl : imageMobile,
        };

        setIsEditing(false);
        onUpdateTutorial(body);
    };

    const onCancel = () => {
        setIsEditing(false);
        setDesktopImgUrl('');
        setMobileImgUrl('');
    };

    // eslint-disable-next-line react/prop-types
    const renderProductForm = ({ handleReset }) => {
        return (
            <Form className={css.form}>
                <div className={css.form__input}>
                    <Input
                        name="title"
                        type="text"
                        label={t('informations:tutorial.title-label')}
                        placeholder={t('informations:tutorial.title-placeholder')}
                    />
                </div>

                <div className={css.form__input}>
                    <Input
                        name="description"
                        type="textarea"
                        label={t('informations:tutorial.desc-label')}
                        placeholder={t('informations:tutorial.desc-placeholder')}
                    />
                </div>

                <div className={css.form__upload}>
                    <ImageUpload
                        cta={t('informations:tutorial.add-visual')}
                        inputName={'imageDesktop'}
                        label={t('informations:tutorial.desktop-label')}
                        format={t('informations:tutorial.format')}
                        imgUrl={desktopImgUrl !== '' ? desktopImgUrl : imageDesktop}
                        onUploadImg={(url) => setDesktopImgUrl(url)}
                        width={'368px'}
                        height={'208px'}
                    />

                    <ImageUpload
                        cta={t('informations:tutorial.add-visual')}
                        inputName={'imageMobile'}
                        label={t('informations:tutorial.mobile-label')}
                        format={t('informations:tutorial.format')}
                        imgUrl={mobileImgUrl !== '' ? mobileImgUrl : imageMobile}
                        onMobileUploadImg={(url) => setMobileImgUrl(url)}
                        width={'368px'}
                        height={'208px'}
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
            </Form>
        );
    };

    return (
        <>
            <div className={css.step}>
                <span
                    onClick={() => onEdit()}
                    className={`${css.step__icon} ${isEditing && css.step__icon__editing}`}
                />
                {!isEditing ? (
                    <>
                        <h5> {t('informations:tutorial.step.step', { order })}</h5>
                        <h6>{title}</h6>
                        <Text variant={'body_00'} color={'ui-secondary'}>
                            {description}
                        </Text>
                        <div className={css.step__img}>
                            <div
                                className={css.step__img__desktop}
                                style={{
                                    backgroundImage: `url(${desktopImgUrl || imageDesktop})`,
                                }}
                            />
                            <div
                                className={css.step__img__mobile}
                                style={{
                                    backgroundImage: `url(${mobileImgUrl || imageMobile})`,
                                }}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <h5> {t('informations:tutorial.step.step', { order })}</h5>
                        <Formik
                            validationSchema={updateTutorialSchema}
                            initialValues={getInitialValues()}
                            onSubmit={(values) => onSubmit(values)}
                        >
                            {(values) => renderProductForm(values)}
                        </Formik>
                    </>
                )}
            </div>
        </>
    );
};

export default Step;
