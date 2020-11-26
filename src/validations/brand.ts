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

const url = yup
    .string()
    .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'WRONG_FORMAT',
    )
    .required('REQUIRED');

const color = yup.string().min(6, 'MIN_LENGTH').max(6, 'MAX_LENGTH').required('REQUIRED');

const desc = yup.string().min(2, 'MIN_LENGTH').max(155, 'MAX_LENGTH').required('REQUIRED');

const terms = yup.string().min(2, 'MIN_LENGTH').max(155, 'MAX_LENGTH');

export const updateBrand = yup.object({
    name,
    url,
    color,
    desc,
    terms,
});
