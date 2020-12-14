import { updateItems } from './informations.utils';

const InformationsReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return {
                ...state,
                isFetching: true,
                error: null,
                showNotificationSuccess: {
                    updateBrand: false,
                    updateTutorial: false,
                    updateProduct: false,
                    updateProductsIntroduction: false,
                },
            };
        case 'FETCH_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        case 'GET_BRAND_SUCCESS':
            return {
                ...state,
                isFetching: false,
                brand: action.payload,
                error: null,
            };
        case 'UPDATE_BRAND_SUCCESS':
            return {
                ...state,
                isFetching: false,
                brand: action.payload,
                error: null,
                showNotificationSuccess: {
                    updateBrand: true,
                    updateTutorial: false,
                    updateProduct: false,
                    updateProductsIntroduction: false,
                },
            };
        case 'GET_TUTORIAL_SUCCESS':
            return {
                ...state,
                isFetching: false,
                tutorial: action.payload,
                error: null,
            };
        case 'UPDATE_TUTORIAL_SUCCESS':
            return {
                ...state,
                isFetching: false,
                tutorial: updateItems(state.tutorial, action.payload),
                error: null,
                showNotificationSuccess: {
                    updateBrand: false,
                    updateTutorial: true,
                    updateProduct: false,
                    updateProductsIntroduction: false,
                },
            };
        case 'GET_PRODUCTS_SUCCESS':
            return {
                ...state,
                isFetching: false,
                products: action.payload,
                error: null,
            };
        case 'UPDATE_PRODUCT_SUCCESS':
            return {
                ...state,
                isFetching: false,
                products: updateItems(state.products, action.payload),
                error: null,
                showNotificationSuccess: {
                    updateBrand: false,
                    updateTutorial: false,
                    updateProduct: true,
                    updateProductsIntroduction: false,
                },
            };
        case 'GET_PRODUCTS_INTRODUCTION_SUCCESS':
            return {
                ...state,
                isFetching: false,
                productsIntroduction: action.payload,
                error: null,
            };
        case 'UPDATE_PRODUCTS_INTRODUCTION_SUCCESS':
            return {
                ...state,
                isFetching: false,
                productsIntroduction: action.payload,
                error: null,
                showNotificationSuccess: {
                    updateBrand: false,
                    updateTutorial: false,
                    updateProduct: false,
                    updateProductsIntroduction: true,
                },
            };
        default:
            return state;
    }
};

export default InformationsReducer;
