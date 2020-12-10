import React, { useState } from 'react';
import css from './Brand.module.scss';
import { useTranslation } from '@i18n';
import { Form, Formik } from 'formik';
import { updateBrandSchema } from '@validations/brand';
import Input from '@components/common/Formik/FormikInputField';
import Button from '@components/common/Button/Button';
import LogoUpload from '@components/dashboard/Informations/LogoUpload/LogoUpload';
import Spinner from '@components/common/Spinner/Spinner';

type BrandProps = {
    name: string;
    logo: string;
    url: string;
    color: string;
    description: string;
    mentions: string;
    onUpdateBrand: (body: object) => void;
    onResetBrand: (body: object) => void;
    partnerUniq: string;
    isFetching: boolean;
};

const Brand = ({
    name,
    logo,
    color,
    url,
    description,
    mentions,
    onUpdateBrand,
    onResetBrand,
    partnerUniq,
    isFetching,
}: BrandProps) => {
    const { t } = useTranslation('dashboard-informations');

    const [logoUrl, setLogoUrl] = useState('');

    const getInitialValues = () => {
        return {
            name: name,
            logo: logo,
            color: color,
            siteUrl: url,
            description: description,
            mentions: mentions,
            partnerUniq: partnerUniq,
        };
    };

    const onSubmit = async (values) => {
        const body = {
            ...values,
            logo: logoUrl !== '' ? logoUrl : logo,
            description: {
                fr: values.description,
                en: values.description,
            },
            mentions: {
                fr: values.mentions,
                en: values.mentions,
            },
        };

        onUpdateBrand(body);
    };

    const onReset = () => {
        const body = { partnerUniq: partnerUniq, reset: true };
        onResetBrand(body);
    };

    // eslint-disable-next-line react/prop-types
    const renderBrandForm = ({ handleReset }) => {
        return (
            <Form className={css.brand__card__form}>
                <LogoUpload
                    inputName="logo"
                    label={t('dashboard-informations:brand.logo-label')}
                    cta={t('dashboard-informations:btn.add')}
                    format={t('dashboard-informations:brand.logo-format')}
                    onUploadLogo={(url) => setLogoUrl(url)}
                    fileSizeLimit={1000000}
                    fileWidthLimit={747}
                    fileHeightLimit={420}
                />

                <div className={css.brand__card__form__input}>
                    <Input
                        name="name"
                        type="text"
                        label={t('dashboard-informations:brand.brand-label')}
                        placeholder={t('dashboard-informations:brand.brand-placeholder')}
                    />
                </div>
                <div className={css.brand__card__form__input}>
                    <Input
                        name="color"
                        type="text"
                        label={t('dashboard-informations:brand.color-label')}
                        placeholder={t('dashboard-informations:brand.color-placeholder')}
                    />
                </div>
                <div className={css.brand__card__form__input}>
                    <Input
                        name="siteUrl"
                        type="text"
                        label={t('dashboard-informations:brand.url-label')}
                        placeholder={t('dashboard-informations:brand.url-placeholder')}
                    />
                </div>
                <div className={css.brand__card__form__input}>
                    <Input
                        name="description"
                        type="textarea"
                        label={t('dashboard-informations:brand.desc-label')}
                        placeholder={t('dashboard-informations:brand.desc-placeholder')}
                    />
                </div>
                <div className={css.brand__card__form__input}>
                    <Input
                        name="mentions"
                        type="textarea"
                        label={t('dashboard-informations:brand.terms-label')}
                        placeholder={t('dashboard-informations:brand.terms-placeholder')}
                    />
                </div>

                <p className={css.brand__card__form__reset} onClick={onReset}>
                    {t('dashboard-informations:brand.reset')}
                </p>

                <div className={css.brand__card__form__btn}>
                    <Button
                        margin={'0 10px 0 0'}
                        variant="secondary"
                        size="small"
                        onClick={handleReset}
                        type={'button'}
                    >
                        {t('dashboard-informations:btn.cancel')}
                    </Button>
                    <Button variant="primary" size="small" type="submit" isLoading={isFetching}>
                        {t('dashboard-informations:btn.validate')}
                    </Button>
                </div>
            </Form>
        );
    };

    const style = {
        backgroundImage: `url(${logoUrl || logo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: color,
    };
    return (
        <div className={css.brand}>
            <div className={css.brand__card}>
                {isFetching ? (
                    <Spinner height={'60px'} width={'60px'} />
                ) : (
                    <>
                        <div className={css.brand__card__logo} style={style}>
                            {!logo && (
                                <p className={css.brand__card__logo__placeholder}>
                                    {t('dashboard-informations:brand.logo')}
                                </p>
                            )}
                        </div>
                        <Formik
                            validationSchema={updateBrandSchema}
                            initialValues={getInitialValues()}
                            onSubmit={(values) => onSubmit(values)}
                        >
                            {(values) => renderBrandForm(values)}
                        </Formik>
                    </>
                )}
            </div>
        </div>
    );
};
export default React.memo(Brand);
