const routes = require('next-routes')()
    .add({
        name: 'home',
        pattern: '/',
        page: 'home',
    })
    .add({
        name: 'connexion',
        pattern: '/connexion',
        page: 'authentication',
    })
    .add({
        name: 'terms',
        pattern: '/conditions-generales-utilisation',
        page: 'terms',
    });
module.exports = routes;
