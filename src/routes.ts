const routes = require('next-routes')().add({
    name: 'home',
    pattern: '/',
    page: 'home',
});

module.exports = routes;
