const yup = require('yup');

const title = yup.string().required('REQUIRED').min(2, 'MIN_LENGTH').max(60, 'MAX_LENGTH');

const description = yup.string().required('REQUIRED').min(2, 'MIN_LENGTH').max(155, 'MAX_LENGTH');

const price = yup.number().typeError('MUST_BE_NUMBER').required('REQUIRED');

export const updateProductsSchema = yup.object({
    title,
    description,
    price,
});
