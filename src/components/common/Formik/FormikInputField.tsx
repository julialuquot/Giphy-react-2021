import React from 'react';
import { Field, ErrorMessage } from 'formik';
import InputField from '@components/common/InputField/InputField';
import InputErrorMessage from '@components/common/Formik/InputErrorMessage/InputErrorMessage';
const valid = (touched, errors, name) => touched[name] && !errors[name];
const error = (touched, errors, name) => touched[name] && errors[name];
type FormikInputFieldProps = {
    name: string;
    type: string;
    label: string;
    placeholder: string;
};

const FormikInputField: React.FC<FormikInputFieldProps> = ({ name, ...props }: FormikInputFieldProps) => {
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

export default FormikInputField;
