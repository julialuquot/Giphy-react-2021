import React from 'react';
import { Field } from 'formik';
import css from './LogoUpload.scss';
import InformationsService from '@services/domain/InformationsService';
import { useToasts } from 'react-toast-notifications';
import { useTranslation } from '@i18n';

type LogoUploadProps = {
    cta: string;
    inputName: string;
    label: string;
    format: string;
    onUploadLogo: (string) => void;
    fileSizeLimit: number;
    fileWidthLimit: number;
    fileHeightLimit: number;
};

const LogoUpload = ({
    inputName,
    cta,
    label,
    format,
    onUploadLogo,
    fileSizeLimit,
    fileWidthLimit,
    fileHeightLimit,
}: LogoUploadProps) => {
    const { t } = useTranslation('common');
    const { addToast } = useToasts();

    const onChange = (e) => {
        e.preventDefault();
        if (!e || !e.target || !e.target.files || !e.target.files.length) {
            return;
        }
        const file = e.target.files[0];

        if (file.size > fileSizeLimit) {
            addToast(t(`common:errors.WRONG_FORMAT_IMG`), {
                appearance: 'error',
                autoDismiss: true,
            });

            return;
        }

        const getImageDimension = (image) => {
            return new Promise((resolve, reject) => {
                try {
                    const fileReader = new FileReader();

                    fileReader.onload = () => {
                        const img = new Image();
                        img.onload = () => {
                            resolve({ width: img.width, height: img.height });
                        };
                        if (typeof fileReader.result === 'string') {
                            img.src = fileReader.result;
                        }
                    };

                    fileReader.readAsDataURL(image);
                } catch (e) {
                    reject(e);
                }
            });
        };

        getImageDimension(file).then((res) => {
            // @ts-ignore
            if (res.width > fileWidthLimit || res.height > fileHeightLimit) {
                addToast(t(`common:errors.WRONG_FORMAT_IMG`), {
                    appearance: 'error',
                    autoDismiss: true,
                });
                return;
            }
            return onSubmit();
        });
        const onSubmit = () => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            return (reader.onloadend = () => {
                const body = { image: reader.result };
                InformationsService.imageUpload(body)
                    .then((res) => onUploadLogo(res.data.image))
                    .catch((err) => err);
            });
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
