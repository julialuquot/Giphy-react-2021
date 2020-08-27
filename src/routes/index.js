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
    });
module.exports = routes;
