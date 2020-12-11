import { axiosClient } from '@services/http/Http';
import API from '@services/http/Api';
import jwtDecode from 'jwt-decode';
import nextCookies from 'next-cookies';
import Cookies from 'js-cookie';

const signIn = (body) => axiosClient().post(API.AUTH.SIGN_IN, body);
const signOut = () => axiosClient().post(API.AUTH.SIGN_OUT);

const decodeAuthCookie = () => {
    const token = Cookies.get('merchantDashboardToken');
    if (token) {
        return jwtDecode(token);
    }

    return null;
};

const getUser = (ctx) => {
    const tokenCookie = nextCookies(ctx).merchantDashboardToken;

    if (ctx && tokenCookie) {
        return jwtDecode(tokenCookie);
    }

    return null;
};

const authService = { signIn, signOut, getUser, decodeAuthCookie };

export default authService;
