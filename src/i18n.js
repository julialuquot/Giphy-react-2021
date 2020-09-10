const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
    otherLanguages: ['fr'],
    defaultLanguage: 'fr',
    fallbackLng: 'fr',

    defaultNS: 'common',
    fallbackNS: 'common',

    localePath: 'public/static/locales',

    initImmediate: false,

    interpolation: { escapeValue: false },

    missingKeyHandler: function () {
        // eslint-disable-next-line no-console
        console.log(arguments);
    },
});
