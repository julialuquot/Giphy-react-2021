const routes = require('next-routes')()
    /*
   LPC ROUTES
   */
    .add({
        name: 'home-page',
        pattern: '/',
        page: 'lpc/home-page',
    })
    .add({
        name: 'connexion',
        pattern: '/connexion',
        page: 'lpc/authentication',
    })
    .add({
        name: 'partners-page',
        pattern: '/notre-reseau-partenaires',
        page: 'lpc/partners-network-page',
    })
    .add({
        name: 'gift-card-page',
        pattern: '/cado-carte',
        page: 'lpc/gift-card-page',
    })
    .add({
        name: 'faq-page',
        pattern: '/faq',
        page: 'lpc/faq',
    })
    .add({
        name: 'terms',
        pattern: '/conditions-generales-utilisation',
        page: 'lpc/terms',
    })
    .add({
        name: 'odvp',
        pattern: '/on-double-votre-pot-2020',
        page: 'lpc/odvp',
    })
    /*
    DASHBOARD ROUTES
    */
    .add({
        name: 'dashboard-home',
        pattern: '/dashboard',
        page: 'dashboard/home-page',
    })
    .add({
        name: 'dashboard-connexion',
        pattern: '/dashboard/connexion',
        page: 'dashboard/sign-in-page',
    })
    .add({
        name: 'dashboard-stats',
        pattern: '/dashboard/stats/:reference',
        page: 'dashboard/stats-page/[reference]',
    })

    .add({
        name: 'dashboard-informations',
        pattern: '/dashboard/informations/:reference',
        page: 'dashboard/informations-page/[reference]',
    })
    .add({
        name: 'dashboard-preview',
        pattern: '/dashboard/preview/:reference',
        page: 'dashboard/preview-page/[reference]',
    })
    .add({
        name: 'dashboard-admin-informations',
        pattern: '/dashboard/admin/informations/:reference',
        page: 'dashboard/informations-page/[reference]',
    })
    .add({
        name: 'dashboard-partners',
        pattern: '/dashboard/admin/partners',
        page: 'dashboard/partners-page',
    })
    .add({
        name: 'dashboard-admin-stats',
        pattern: '/dashboard/admin/stats/:reference',
        page: 'dashboard/stats-page/[reference]',
    })
    .add({
        name: 'dashboard-preview-admin',
        pattern: '/dashboard/admin/preview/:reference',
        page: 'dashboard/preview-page/[reference]',
    });

module.exports = routes;
