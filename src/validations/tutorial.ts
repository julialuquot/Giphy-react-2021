const yup = require('yup');

const title = yup.string().required('REQUIRED').min(2, 'MIN_LENGTH').max(60, 'MAX_LENGTH');

const description = yup.string().required('REQUIRED').min(2, 'MIN_LENGTH').max(155, 'MAX_LENGTH');

export const updateTutorial = yup.object({
    title,
    description,
});
