import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'START':
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case 'FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        case 'USER_SIGN_IN_SUCCESS':
            return {
                ...state,
                isFetching: false,
                user: getUserInformations(action.payload.status),
                error: null,
            };
        case 'USER_SIGN_OUT_SUCCESS':
            return {
                ...state,
                isFetching: false,
                user: getUserInformations(action.payload.status),
                error: null,
            };
        default:
            return state;
    }
};

const getUserInformations = (status) => {
    if (status === 200) {
        const token = Cookies.get('merchantDashboardToken');
        return token !== undefined && jwtDecode(token);
    }
};

export default AuthReducer;
