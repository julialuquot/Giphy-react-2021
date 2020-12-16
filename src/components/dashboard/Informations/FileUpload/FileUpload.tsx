import React from 'react';
import { Field } from 'formik';
import css from './FileUpload.module.scss';
import { useToasts } from 'react-toast-notifications';
import { useTranslation } from '@i18n';

type LogoUploadProps = {
    cta: string;
    inputName: string;
    label: string;
    format: string;
    onFileUpload: (string) => void;
    fileSizeLimit: number;
    fileType: string;
};

const FileUpload = ({ inputName, cta, label, format, onFileUpload, fileSizeLimit, fileType }: LogoUploadProps) => {
    const { t } = useTranslation('common');
    const { addToast } = useToasts();

    const onChange = (e) => {
        e.preventDefault();

        if (!e || !e.target || !e.target.files || !e.target.files.length) {
            return;
        }
        const file = e.target.files[0];

        if (file.size > fileSizeLimit || file.name.split('.').pop() !== fileType) {
            addToast(t(`common:errors.WRONG_FILE_FORMAT`), {
                appearance: 'error',
                autoDismiss: true,
            });

            return;
        }

        onFileUpload(file);
    };

    return (
        <Field name={inputName}>
            {() => (
                <div className={css.input}>
                    <p className={css.input__label}>{label}</p>
                    <p className={css.input__format}>{format}</p>

                    <label className={css.input__btn}>
                        <span>{cta}</span>
                        <input
                            className={css.input__hidden}
                            type="file"
                            onChange={(e) => onChange(e)}
                            name={inputName}
                            accept={`.${fileType}`}
                        />
                    </label>
                </div>
            )}
        </Field>
    );
};

export default FileUpload;
