const InformationsReducer = (state, action) => {
    switch (action.type) {
        case 'GET_BRAND_START':
            return {
                ...state,
                isFetching: true,
            };
        case 'GET_BRAND_SUCCESS':
            return {
                ...state,
                isFetching: false,
                brand: action.payload,
            };
        case 'GET_BRAND_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default InformationsReducer;
