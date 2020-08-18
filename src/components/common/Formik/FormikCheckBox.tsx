import React from 'react';
import { Field } from 'formik';
import Checkbox from '@components/common/Checkbox/Checkbox';

type FormikCheckBoxProps = {
    name: string;
};

const FormikCheckBox: React.FC<FormikCheckBoxProps> = ({ name, ...props }: FormikCheckBoxProps) => {
    return <Field name={name}>{({ field }) => <Checkbox {...props} {...field} />}</Field>;
};

export default FormikCheckBox;
