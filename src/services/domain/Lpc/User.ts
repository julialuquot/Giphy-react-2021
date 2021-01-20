import { axiosClient } from '../../http/Http';

const login = (body) => axiosClient().post('/api/login', new URLSearchParams(body).toString());

// forgotten password
const sendEmail = (body) => axiosClient().post('/api/password-forget', new URLSearchParams(body).toString());

const changePassword = (body) =>
    axiosClient().post(`/api/new-password/${body.uniqUP}`, new URLSearchParams(body).toString());

const userServices = { login, sendEmail, changePassword };

// tarnsforming body
// Object.keys(userServices).forEach((key) => {
//     const service = userServices[key];
//     userServices[key] = (body) => {
//         const transformedBody = new URLSearchParams(body).toString();
//         return service(transformedBody);
//     };
// });

export default userServices;
