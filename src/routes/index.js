const routes = require('next-routes')()

    .add({
        name: 'user-details-page',
        pattern: '/julia/:GifCard',
        page: 'julia/[GifCard]',
    })
    .add({
        name: 'giphy',
        pattern: '/giphy',
        page: 'giphy',
    })
    .add({
        name: 'gif-details-page',
        pattern: '/giphy/:reference',
        page: 'giphy/[reference]',
    });

module.exports = routes;
