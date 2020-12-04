const yup = require('yup');
// const moment = require('moment');

const email = yup.string().min(2, 'MIN_LENGTH').max(130, 'MAX_LENGTH').email('INVALID');

const signInPassword = yup.string().required('REQUIRED');

const passwordRegex = new RegExp(
    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[<=>:+()€±;|`/ ._§£"#?!°@$%^&*{}\'\\[\\],-]).{8,}$',
);

const password = yup
    .string()
    .required('REQUIRED')
    .min(8, 'MIN_LENGTH')
    .max(60, 'MAX_LENGTH')
    .matches(passwordRegex, 'INVALID');

const passwordConfirmation = yup
    .string()
    .oneOf([yup.ref('password')], 'DOES_NOT_MATCH')
    .required('REQUIRED');

const message = yup.string().min(2, 'MIN_LENGTH').max(320, 'MAX_LENGTH');

export const passwordForgottenSubmitNewPassword = yup.object({
    password,
    passwordConfirmation,
});

export const signIn = yup.object({
    email: email.required('REQUIRED'),
    password: signInPassword,
});

export const passwordForgottenLinkGeneration = yup.object({
    email: email.required('REQUIRED'),
});

export const confirmModificationSchema = yup.object({
    message: message.required('REQUIRED'),
    email: email,
});
