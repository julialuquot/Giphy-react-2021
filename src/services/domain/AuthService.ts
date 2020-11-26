import { axiosClient } from '@services/http/Http';
import API from '@services/http/Api';

const signIn = (body) => axiosClient().post(API.AUTH.SIGN_IN, body);
const signOut = (body) => axiosClient().post(API.AUTH.SIGN_IN, body);

const authService = { signIn, signOut };

export default authService;
