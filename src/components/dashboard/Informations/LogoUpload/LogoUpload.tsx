import React from 'react';
import { Field } from 'formik';
import css from './LogoUpload.scss';
import InformationsService from '@services/domain/InformationsService';

type LogoUploadProps = {
    cta: string;
    inputName: string;
    label: string;
    format: string;
    onUploadLogo: (string) => void;
};

const LogoUpload = ({ inputName, cta, label, format, onUploadLogo }: LogoUploadProps) => {
    const onChange = (e) => {
        e.preventDefault();
        if (!e || !e.target || !e.target.files || !e.target.files.length) {
            return;
        }
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const body = { image: reader.result };
            InformationsService.imageUpload(body)
                .then((res) => onUploadLogo(res.data.image))
                .catch((err) => err);
        };
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
                            accept=".svg"
                        />
                    </label>
                </div>
            )}
        </Field>
    );
};

export default LogoUpload;
