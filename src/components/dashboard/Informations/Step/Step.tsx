import React, { useContext, useState } from 'react';
import css from './Step.module.scss';
import Text from '@components/common/Text/Text';
import { Form, Formik } from 'formik';
import InformationsContext from '@components/dashboard/context/informations/InformationsContext';
import Input from '@components/common/Formik/FormikInputField';
import Button from '@components/common/Button/Button';
import { useTranslation } from '@i18n';
import ImageUpload from '@components/dashboard/Informations/ImageUpload/ImageUpload';
import { updateTutorial } from '@validations/tutorial';

type StepProps = {
    name: string;
    title: string;
    desc: string;
};

const Step = ({ name, title, desc }: StepProps) => {
    const { t } = useTranslation('informations');

    const [isEditing, setIsEditing] = useState(false);

    const onEdit = () => {
        setIsEditing(true);
    };

    const informationsContext = useContext(InformationsContext);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
    const { isFetching, error, brand } = informationsContext;

    const [desktopImgUrl, setDesktopImgUrl] = useState('');
    const [mobileImgUrl, setMobileImgUrl] = useState('');

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
                        imgUrl={desktopImgUrl}
                        onUploadImg={(url) => setDesktopImgUrl(url)}
                        width={'368px'}
                        height={'208px'}
                    />

                    <ImageUpload
                        cta={t('informations:tutorial.add-visual')}
                        inputName={'imageMobile'}
                        label={t('informations:tutorial.mobile-label')}
                        format={t('informations:tutorial.format')}
                        imgUrl={mobileImgUrl}
                        onUploadImg={(url) => setMobileImgUrl(url)}
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
                        <h5>{name}</h5>
                        <h5>{title}</h5>
                        <Text variant={'body_00'} color={'ui-primary'}>
                            {desc}
                        </Text>
                    </>
                ) : (
                    <>
                        <h5>{name}</h5>
                        <Formik
                            validationSchema={updateTutorial}
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
