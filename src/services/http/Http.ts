import axios from 'axios';

const username = 'lpc';
const password = '123commun';

export const axiosClient = () => {
    return axios.create({
        timeout: 60000,
        proxy: {
            host: 'localhost',
            port: 3000,
        },
        auth: {
            username: username,
            password: password,
        },
    });
};
