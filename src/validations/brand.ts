const yup = require('yup');

const name = yup
    .string()
    .matches(
        /^((?!\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]).)*$/,
        'EMOTES_NOT_SUPPORTED',
    )
    .min(2, 'MIN_LENGTH')
    .max(60, 'MAX_LENGTH')
    .required('REQUIRED');

const siteUrl = yup
    .string()
    .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'WRONG_FORMAT',
    )
    .required('REQUIRED');

const color = yup
    .string()
    .matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/, 'WRONG_FORMAT')
    .required('REQUIRED');

const description = yup.string().min(2, 'MIN_LENGTH').max(155, 'MAX_LENGTH').required('REQUIRED');

const mentions = yup.string().min(2, 'MIN_LENGTH').max(155, 'MAX_LENGTH');

export const updateBrandSchema = yup.object({
    name,
    siteUrl,
    color,
    description,
    mentions,
});
