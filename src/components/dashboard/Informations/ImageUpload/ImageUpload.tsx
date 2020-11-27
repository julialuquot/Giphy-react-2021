import React from 'react';
import { Field } from 'formik';
import css from './ImageUpload.scss';
import InformationsService from '@services/domain/InformationsService';

type LogoUploadProps = {
    cta: string;
    inputName: string;
    label?: string;
    format: string;
    onUploadImg: (string) => void;
    imgUrl: string;
    width: string;
    height: string;
};

const ImageUpload = ({ inputName, cta, label, format, onUploadImg, imgUrl, width, height }: LogoUploadProps) => {
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
                .then((res) => onUploadImg(res.data.image))
                .catch((err) => err);
        };
    };

    const style = {
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: width,
        height: height,
    };

    return (
        <Field name={inputName}>
            {() => (
                <div className={css.container}>
                    {label && <p className={css.input__label}>{label}</p>}
                    <div className={css.input} style={style}>
                        <label className={css.input__btn}>
                            <img className={css.input__btn__icon} src="/icons/edit.svg" alt="" />
                            <p className={css.input__btn__cta}>{cta}</p>
                            <input
                                className={css.input__hidden}
                                type="file"
                                onChange={(e) => onChange(e)}
                                name={inputName}
                                accept=".png,.jpg,.jpeg"
                            />
                        </label>
                        <p className={css.input__format}>{format}</p>
                    </div>
                </div>
            )}
        </Field>
    );
};
export default ImageUpload;
