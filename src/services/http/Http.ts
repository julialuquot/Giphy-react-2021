import axios from 'axios';

export const axiosClient = () => {
    return axios.create({
        timeout: 60000,
    });
};
