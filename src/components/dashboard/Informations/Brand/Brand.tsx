import React, { useState } from 'react';
import css from './Brand.module.scss';
import { useTranslation } from '@i18n';
import { Form, Formik } from 'formik';
import { updateBrandSchema } from '@validations/brand';
import Input from '@components/common/Formik/FormikInputField';
import Button from '@components/common/Button/Button';
import LogoUpload from '@components/dashboard/Informations/LogoUpload/LogoUpload';

type BrandProps = {
    name: string;
    logo: string;
    url: string;
    color: string;
    description: string;
    mentions: string;
    onUpdateBrand: (body: object) => void;
    merchantUniq: string;
};

const Brand = ({ name, logo, color, url, description, mentions, onUpdateBrand, merchantUniq }: BrandProps) => {
    const { t } = useTranslation('informations');

    const [logoUrl, setLogoUrl] = useState('');

    const getInitialValues = () => {
        return {
            name: name,
            logo: logo,
            color: color,
            siteUrl: url,
            description: description,
            mentions: mentions,
            merchantUniq: merchantUniq,
        };
    };

    const onSubmit = async (values) => {
        const body = {
            ...values,
            logo: logoUrl !== '' ? logoUrl : logo,
        };
        onUpdateBrand(body);
    };

    // eslint-disable-next-line react/prop-types
    const renderBrandForm = ({ handleReset }) => {
        return (
            <Form className={css.brand__card__form}>
                <LogoUpload
                    inputName="logo"
                    label={t('informations:brand.logo-label')}
                    cta={t('informations:btn.add')}
                    format={t('informations:brand.logo-format')}
                    onUploadLogo={(url) => setLogoUrl(url)}
                />

                <div className={css.brand__card__form__input}>
                    <Input
                        name="name"
                        type="text"
                        label={t('informations:brand.brand-label')}
                        placeholder={t('informations:brand.brand-placeholder')}
                    />
                </div>
                <div className={css.brand__card__form__input}>
                    <Input
                        name="color"
                        type="text"
                        label={t('informations:brand.color-label')}
                        placeholder={t('informations:brand.color-placeholder')}
                    />
                </div>
                <div className={css.brand__card__form__input}>
                    <Input
                        name="siteUrl"
                        type="text"
                        label={t('informations:brand.url-label')}
                        placeholder={t('informations:brand.url-placeholder')}
                    />
                </div>
                <div className={css.brand__card__form__input}>
                    <Input
                        name="description"
                        type="textarea"
                        label={t('informations:brand.desc-label')}
                        placeholder={t('informations:brand.desc-placeholder')}
                    />
                </div>
                <div className={css.brand__card__form__input}>
                    <Input
                        name="mentions"
                        type="textarea"
                        label={t('informations:brand.terms-label')}
                        placeholder={t('informations:brand.terms-placeholder')}
                    />
                </div>

                <p className={css.brand__card__form__reset} onClick={handleReset}>
                    {t('informations:brand.reset')}
                </p>

                <div className={css.brand__card__form__btn}>
                    <Button
                        margin={'0 10px 0 0'}
                        variant="secondary"
                        size="small"
                        onClick={handleReset}
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

    const style = {
        backgroundImage: `url(${logoUrl || logo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: color,
    };
    return (
        <div className={css.brand}>
            <div className={css.brand__card}>
                <div className={css.brand__card__logo} style={style}>
                    <p className={css.brand__card__logo__placeholder}> {t('informations:brand.logo')}</p>
                </div>
                <Formik
                    validationSchema={updateBrandSchema}
                    initialValues={getInitialValues()}
                    onSubmit={(values) => onSubmit(values)}
                >
                    {(values) => renderBrandForm(values)}
                </Formik>
            </div>
        </div>
    );
};

export default React.memo(Brand);
