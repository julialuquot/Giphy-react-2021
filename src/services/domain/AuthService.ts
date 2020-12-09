import { axiosClient } from '@services/http/Http';
import API from '@services/http/Api';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

const signIn = (body) => axiosClient().post(API.AUTH.SIGN_IN, body);
const signOut = () => axiosClient().post(API.AUTH.SIGN_OUT);

export const getUser = (ctx) => {
    const tokenCookie = Cookies.get('merchantDashboardToken');

    if (ctx && ctx.req && tokenCookie) {
        return jwtDecode(tokenCookie);
    }

    return null;
};

const authService = { signIn, signOut, getUser };

export default authService;
