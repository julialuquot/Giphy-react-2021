import axios from 'axios';
export const axiosClient = () => {
    const client = axios.create({
        timeout: 60000,
    });

    return client;
};
