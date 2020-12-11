import React, { useState } from 'react';
import css from './Step.module.scss';
import Text from '@components/common/Text/Text';
import { Form, Formik } from 'formik';
import Input from '@components/common/Formik/FormikInputField';
import Button from '@components/common/Button/Button';
import { useTranslation } from '@i18n';
import ImageUpload from '@components/dashboard/Informations/ImageUpload/ImageUpload';
import { updateTutorialSchema } from '@validations/tutorial';
import Spinner from '@components/common/Spinner/Spinner';

type StepProps = {
    title: string;
    description: string;
    order: number;
    imageDesktop: string;
    imageMobile: string;
    onUpdateTutorial: (body: object) => void;
    onResetTutorial: (body: object) => void;
    partnerUniq: string;
    isFetching: boolean;
};

const Step = ({
    title,
    description,
    order,
    imageDesktop,
    imageMobile,
    onUpdateTutorial,
    partnerUniq,
    onResetTutorial,
    isFetching,
}: StepProps) => {
    const { t } = useTranslation('dashboard-informations');

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
            partnerUniq: partnerUniq,
        };
    };

    const onSubmit = async (values) => {
        const body = {
            ...values,
            imageDesktop: desktopImgUrl !== '' ? desktopImgUrl : imageDesktop,
            imageMobile: mobileImgUrl !== '' ? mobileImgUrl : imageMobile,
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
        onUpdateTutorial(body);
    };

    const onReset = () => {
        const body = { partnerUniq: partnerUniq, reset: true, order: order };
        onResetTutorial(body);
    };

    const onCancel = () => {
        setIsEditing(false);
        setDesktopImgUrl('');
        setMobileImgUrl('');
    };

    const renderStepForm = () => {
        return (
            <Form className={css.form}>
                <div className={css.form__input}>
                    <Input
                        name="title"
                        type="text"
                        label={t('dashboard-informations:tutorial.title-label')}
                        placeholder={t('dashboard-informations:tutorial.title-placeholder')}
                    />
                </div>

                <div className={css.form__input}>
                    <Input
                        name="description"
                        type="textarea"
                        label={t('dashboard-informations:tutorial.desc-label')}
                        placeholder={t('dashboard-informations:tutorial.desc-placeholder')}
                    />
                </div>

                <div className={css.form__upload}>
                    <ImageUpload
                        cta={t('dashboard-informations:tutorial.add-visual')}
                        inputName={'imageDesktop'}
                        label={t('dashboard-informations:tutorial.desktop-label')}
                        format={t('dashboard-informations:tutorial.format')}
                        fileSizeLimit={1000000}
                        fileWidthLimit={747}
                        fileHeightLimit={420}
                        imgUrl={desktopImgUrl !== '' ? desktopImgUrl : imageDesktop}
                        onUploadImg={(url) => setDesktopImgUrl(url)}
                        width={'368px'}
                        height={'208px'}
                    />

                    <ImageUpload
                        cta={t('dashboard-informations:tutorial.add-visual')}
                        inputName={'imageMobile'}
                        label={t('dashboard-informations:tutorial.mobile-label')}
                        format={t('dashboard-informations:tutorial.format')}
                        fileSizeLimit={1000000}
                        fileWidthLimit={747}
                        fileHeightLimit={420}
                        imgUrl={mobileImgUrl !== '' ? mobileImgUrl : imageMobile}
                        onMobileUploadImg={(url) => setMobileImgUrl(url)}
                        width={'368px'}
                        height={'208px'}
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
                    <Button variant="primary" size="small" type="submit">
                        {t('dashboard-informations:btn.validate')}
                    </Button>
                </div>
            </Form>
        );
    };

    return (
        <>
            <div className={css.step}>
                {isFetching ? (
                    <Spinner height={'60px'} width={'60px'} />
                ) : (
                    <>
                        <span
                            onClick={() => onEdit()}
                            className={`${css.step__icon} ${isEditing && css.step__icon__editing}`}
                        />
                        {!isEditing ? (
                            <>
                                <h5> {t('dashboard-informations:tutorial.step.step', { order })}</h5>
                                <h5>{title || t('dashboard-informations:tutorial.step.title')}</h5>
                                <Text variant={'body_01'} color={'ui-primary'}>
                                    {description || t('dashboard-informations:tutorial.step.desc')}
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
                                <h5> {t('dashboard-informations:tutorial.step.step', { order })}</h5>
                                <Formik
                                    validationSchema={updateTutorialSchema}
                                    initialValues={getInitialValues()}
                                    onSubmit={(values) => onSubmit(values)}
                                >
                                    {() => renderStepForm()}
                                </Formik>
                            </>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default Step;
