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

const getUserRole = (user) => {
    const admin = user.roles.find((role) => role === 'admin');
    const merchant = user.roles.find((role) => role === 'merchant');

    if (admin) {
        return 'ADMIN';
    }

    if (merchant) {
        return 'MERCHANT';
    }

    return 'UNAUTHORIZED';
};

const authService = { signIn, signOut, getUser, getUserRole, decodeAuthCookie };

export default authService;
