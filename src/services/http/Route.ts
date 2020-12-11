export const getRoute = (route, params) => {
    console.log('param', params);
    console.log('route', route);
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
