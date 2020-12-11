export const getRoute = (route, params) => {
    if (!params) {
        return route;
    }
    return `${route}/${params}`;
};

export const ROUTE = {
    DASHBOARD: {
        WORKSPACE: '/dashboard/workspace',
        SIGN_IN: '/dashboard/connexion',
    },
};
