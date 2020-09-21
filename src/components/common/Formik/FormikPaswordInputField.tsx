import React, { useRef, useState, useEffect } from 'react';
import { Field, ErrorMessage } from 'formik';
import InputField from '@components/common/InputField/InputField';
import InputErrorMessage from '@components/common/Formik/InputErrorMessage/InputErrorMessage';
const valid = (touched, errors, name) => touched[name] && !errors[name];
const error = (touched, errors, name) => touched[name] && errors[name];
type FormikPaswordInputFieldProps = {
    id?: string;
    name: string;
    type: string;
    label?: string;
    placeholder?: string;
    key?: string;
    customStyle?: string;
    disabled?: boolean;
    iconPosition?: 'left' | 'right';
};

const FormikPaswordInputField: React.FC<FormikPaswordInputFieldProps> = ({
    name,
    ...props
}: FormikPaswordInputFieldProps) => {
    const [visible, setVisible] = useState(false);
    const iconRef = useRef<HTMLDivElement>(null);

    const iconClickHandler = () => {
        setVisible((visible) => !visible);
    };

    useEffect(() => {
        iconRef.current.addEventListener('click', iconClickHandler);
        iconRef.current.style.cursor = 'pointer';

        return () => {
            iconRef.current.removeEventListener('click', iconClickHandler);
        };
    }, []);
    return (
        <Field name={name}>
            {({ field, form: { touched, errors } }) => {
                return (
                    <div>
                        <InputField
                            error={error(touched, errors, name)}
                            valid={valid(touched, errors, name)}
                            {...props}
                            {...field}
                            iconRef={iconRef}
                            icon={visible ? '/icons/eye-off-outline.svg' : 'icons/eye-outline.svg'}
                            type={visible ? 'text' : 'password'}
                        />

                        <ErrorMessage
                            name={name}
                            render={(msg) => <InputErrorMessage name={name} messageCode={msg} />}
                        />
                    </div>
                );
            }}
        </Field>
    );
};

export default FormikPaswordInputField;
