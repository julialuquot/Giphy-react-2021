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
                user: action.payload.statusText,
                error: null,
            };
        case 'USER_SIGN_OUT_SUCCESS':
            return {
                ...state,
                isFetching: false,
                user: action.payload.statusText,
                error: null,
            };
        default:
            return state;
    }
};

export default AuthReducer;
