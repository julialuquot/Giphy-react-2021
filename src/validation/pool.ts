const yup = require('yup');
const { string } = require('@types/yup');

const name: string = yup.string().min(2, 'MIN_LENGTH').max(60, 'MAX_LENGTH');

const organizerName = yup.string().min(2, 'MIN_LENGTH').max(60, 'MAX_LENGTH');

const category = yup.number();

const eventDate = yup
    .date()
    .transform((value, originalValue) => (originalValue === '' ? null : value))
    .min(new Date().toISOString().split('T')[0], 'MIN_DATE')
    .max(new Date(new Date().setFullYear(new Date().getFullYear() + 100)).toISOString().split('T')[0], 'MAX_DATE');

const description = yup.string().nullable().max(10000, 'MAX_LENGTH');

const photo = yup.string().nullable();

const goal_to_reach = yup.number().nullable().typeError('NUMBER').min(100, 'MIN').max(100000000, 'MAX');

const participation_type = yup.boolean().oneOf([true, false], 'SHOULD_BE_BOOLEAN');

const status = yup.mixed().oneOf([0, 1, 2, '0', '1', '2'], 'UNKNOWN_VALUE');

const participation_amount = yup
    .number()
    .typeError('MUST_BE_NUMBER')
    .nullable()
    .when('participation_type', {
        is: (value) => value,
        then: yup.number().typeError('MUST_BE_NUMBER').required('REQUIRED').min(100, 'MIN').max(300000, 'MAX'),
        otherwise: yup.number().typeError('MUST_BE_NUMBER').nullable(),
    });

const can_contact_organizer = yup.mixed().oneOf([true, false], 'SHOULD_BE_BOOLEAN');

const hide_participants_identity = yup.mixed().oneOf([true, false], 'SHOULD_BE_BOOLEAN');

const hide_participations_amount = yup.mixed().oneOf([true, false], 'SHOULD_BE_BOOLEAN');

const receive_email_notifications = yup.mixed().oneOf([true, false], 'SHOULD_BE_BOOLEAN');

const participation_limit_date = yup
    .date()
    .nullable()
    .max(new Date(new Date().setFullYear(new Date().getFullYear() + 100)).toISOString().split('T')[0], 'MAX_DATE');

const create = yup.object({
    name: name.required('REQUIRED'),
    organizerName: organizerName.required('REQUIRED'),
    eventDate: eventDate.nullable(),
    description: description.nullable(),
});

const update = yup.object({
    name: name.required('REQUIRED'),
    organizer_name: organizer_name.required('REQUIRED'),
    category: category.required('REQUIRED'),
    event_date: event_date.nullable(),
    description,
    cover_photo,
    goal_to_reach,
    participation_type,
    can_contact_organizer,
    receive_email_notifications,
    participation_limit_date,
    participation_amount,
});

const updateAdmin = yup.object({
    name,
    organizer_name,
    category,
    event_date,
    description,
    cover_photo,
    goal_to_reach,
    participation_type,
    can_contact_organizer,
    receive_email_notifications,
    participation_limit_date,
    participation_amount,
    promo_code,
    hide_participants_identity,
    hide_participations_amount,
});

const update_status = yup.object({
    status,
});

module.exports = {
    create,
    update,
    updateAdmin,
    update_status,
};
