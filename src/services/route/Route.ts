export const getRoute = (route, params) => {
    if (!params) {
        return route;
    }
    return `${route}/${params}`;
};

export const ROUTE = {
    GIPHY: '/giphy',

};
