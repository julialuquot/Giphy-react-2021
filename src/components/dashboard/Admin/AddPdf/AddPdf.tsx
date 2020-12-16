import React from 'react';
import css from './AddPdf.module.scss';
import FileUpload from '@components/dashboard/Informations/FileUpload/FileUpload';
import { Form, Formik } from 'formik';
import { updateBrandSchema } from '@validations/brand';
import { useTranslation } from '@i18n';

const AddPdf = () => {
    const { t } = useTranslation('dashboard-stats');

    const getInitialValues = () => {
        return {
            pdf: '',
        };
    };

    const onSubmit = async (values) => {
        // eslint-disable-next-line no-console
        console.log('-----> values', values);
        // TODO connect to WS
    };

    const renderForm = () => {
        return (
            <Form className={css.pdf__form}>
                <div className={css.pdf__form__preview}>
                    <h3>{t('dashboard-stats:documents.pdf')}</h3>
                </div>

                <FileUpload
                    inputName="pdf"
                    onFileUpload={(file) => onSubmit(file)}
                    fileSizeLimit={1000000}
                    fileType={'pdf'}
                    format={t('dashboard-stats:documents.pdf-format')}
                    label={t('dashboard-stats:documents.pdf-label')}
                    cta={t('dashboard-stats:btn.add')}
                />
            </Form>
        );
    };

    return (
        <div className={css.pdf}>
            <Formik
                validationSchema={updateBrandSchema}
                initialValues={getInitialValues()}
                onSubmit={(values) => onSubmit(values)}
            >
                {() => renderForm()}
            </Formik>
        </div>
    );
};

export default AddPdf;
