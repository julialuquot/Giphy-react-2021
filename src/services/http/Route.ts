export const getRoute = (route, params) => {
    if (!params) {
        return route;
    }
    return `${route}/${params}`;
};

export const ROUTE = {
    LPC: {
        HOME: '/',
        SIGN_IN: '/connexion',
        FAQ: '/faq',
        PARTNERS: '/notre-reseau-partenaires',
    },
    DASHBOARD: {
        SIGN_IN: '/dashboard/connexion',
        STATS: '/dashboard/stats',
        INFORMATIONS: '/dashboard/informations',
        PREVIEW: '/dashboard/preview',
        ADMIN: {
            PARTNERS: '/dashboard/admin/partners',
            PREVIEW: '/dashboard/admin/preview',
            INFORMATIONS: '/dashboard/admin/informations',
            STATS: '/dashboard/admin/stats',
        },
    },
};
