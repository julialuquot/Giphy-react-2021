const routes = require('next-routes')()

    .add({
        name: 'user-details-page',
        pattern: '/julia/:[reference]',
        page: 'julia/[[reference]]',
    })
    .add({
        name: 'giphy',
        pattern: '/giphy',
        page: 'giphy',
    })
    .add({
        name: 'gifCard',
        pattern: '/giphy/:[reference]',
        page: 'giphy/GifList/[[reference]]',
    });

module.exports = routes;
