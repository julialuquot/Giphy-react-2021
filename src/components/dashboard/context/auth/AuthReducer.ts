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
                responseStatus: action.payload.status,
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

export default AuthReducer;
