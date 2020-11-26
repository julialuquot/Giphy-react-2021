import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'USER_SIGN_IN_START':
            return {
                ...state,
                isFetching: true,
            };
        case 'USER_SIGN_IN_SUCCESS':
            return {
                ...state,
                isFetching: false,
                user: getUserInformations(action.payload.status),
            };
        case 'USER_SIGN_IN_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload,
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
