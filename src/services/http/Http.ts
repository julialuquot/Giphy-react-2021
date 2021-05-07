import axios from 'axios';

export const axiosClient = (ctx) => {
    return axios.create({
        timeout: 60000,
        proxy: {
            host: 'localhost',
            port: 3000,
        },

        headers: ctx?.req.headers?.cookie ? { cookie: ctx.req.headers.cookie } : undefined,
    });
};
