const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'START':
            return {
                ...state,
                isFetching: true,
                error: null,
                isLoggedIn: false,
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
                error: null,
                isLoggedIn: true,
            };
        case 'USER_SIGN_OUT_SUCCESS':
            return {
                ...state,
                isFetching: false,
                user: null,
                error: null,
                isLoggedIn: false,
            };
        case 'GET_USER_SUCCESS':
            return {
                ...state,
                isFetching: false,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default AuthReducer;
