import { axiosClient } from './Http';

export const login = (body) => axiosClient().post('api/login', new URLSearchParams(body).toString());
