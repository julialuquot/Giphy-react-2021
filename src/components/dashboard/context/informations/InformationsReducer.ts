import { updateItems } from './informations.utils';

const InformationsReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
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
                error: [action.payload],
            };
        case 'UPDATE_BRAND_SUCCESS':
            return {
                ...state,
                isFetching: false,
                brand: action.payload,
            };
        case 'UPDATE_BRAND_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: [action.payload],
            };
        case 'GET_TUTORIAL_SUCCESS':
            return {
                ...state,
                isFetching: false,
                tutorial: action.payload,
            };
        case 'GET_TUTORIAL_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: [action.payload],
            };
        case 'UPDATE_TUTORIAL_SUCCESS':
            return {
                ...state,
                isFetching: false,
                tutorial: updateItems(state.products, action.payload),
            };
        case 'UPDATE_TUTORIAL_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: [action.payload],
            };

        case 'GET_PRODUCTS_SUCCESS':
            return {
                ...state,
                isFetching: false,
                products: action.payload,
            };
        case 'GET_PRODUCTS_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: [action.payload],
            };
        case 'UPDATE_PRODUCT_SUCCESS':
            return {
                ...state,
                isFetching: false,
                products: updateItems(state.products, action.payload),
            };
        case 'UPDATE_PRODUCT_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: [action.payload],
            };
        default:
            return state;
    }
};

export default InformationsReducer;
