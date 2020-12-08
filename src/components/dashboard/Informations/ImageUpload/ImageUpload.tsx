import React from 'react';
import { Field } from 'formik';
import css from './ImageUpload.scss';
import InformationsService from '@services/domain/InformationsService';

type LogoUploadProps = {
    cta: string;
    inputName: string;
    label?: string;
    format: string;
    onUploadImg?: (string) => void;
    onMobileUploadImg?: (string) => void;
    imgUrl: string;
    width: string;
    height: string;
    mobileUpload?: boolean;
    fileSizeLimit: number;
    fileWidthLimit: number;
    fileHeightLimit: number;
};

const ImageUpload = ({
    inputName,
    cta,
    label,
    format,
    onUploadImg,
    onMobileUploadImg,
    imgUrl,
    width,
    height,
    fileSizeLimit,
    fileWidthLimit,
    fileHeightLimit,
}: LogoUploadProps) => {
    const onChange = (e) => {
        e.preventDefault();
        if (!e || !e.target || !e.target.files || !e.target.files.length) {
            return;
        }
        const file = e.target.files[0];

        if (file.size > fileSizeLimit) {
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
            if (res.width < fileWidthLimit && res.height < fileHeightLimit) {
                return onSubmit();
            }
        });

        const onSubmit = () => {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            return (reader.onload = () => {
                const body = { image: reader.result };
                return InformationsService.imageUpload(body)
                    .then((res) =>
                        onMobileUploadImg ? onMobileUploadImg(res.data.image) : onUploadImg(res.data.image),
                    )
                    .catch((err) => err);
            });
        };
    };

    const style = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.66)), url(${imgUrl})`,
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
                            <img className={css.input__btn__icon} src="/front-static/icons/paper-download.svg" alt="" />
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
