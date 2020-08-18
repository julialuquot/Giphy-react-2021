const yup = require('yup');
// const moment = require('moment');

const email = yup.string().required('REQUIRED').min(2, 'MIN_LENGTH').max(130, 'MAX_LENGTH').email('INVALID');

const signinPassword = yup.string().required('REQUIRED');

export const signin = yup.object({
    email,
    password: signinPassword,
});
