import axios from 'axios';
export const axiosClient = () => {
    const client = axios.create({
        timeout: 60000,
        headers: {
            'content-type': 'application/json',
        },
    });

    return client;
};
