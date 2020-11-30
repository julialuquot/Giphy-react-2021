import React, { useReducer } from 'react';
import InformationsContext from './InformationsContext';
import informationsReducer from './InformationsReducer';
import InformationsService from '@services/domain/InformationsService';

type InformationsProviderProps = {
    children: React.ReactNode;
};

const InformationsProvider = ({ children }: InformationsProviderProps) => {
    const initialState = {
        isFetching: false,
        error: null,
        brand: {},
        tutorial: [],
        products: [],
    };

    const [state, dispatch] = useReducer(informationsReducer, initialState);

    // Get BRAND
    const getBrand = async (merchantUniq) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await InformationsService.getBrand(merchantUniq);
            dispatch({ type: 'GET_BRAND_SUCCESS', payload: data.data });
        } catch (err) {
            dispatch({ type: 'GET_BRAND_FAILURE', payload: err.message });
        }
    };

    // update BRAND
    const updateBrand = async (body) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await InformationsService.updateBrand(body);
            dispatch({ type: 'UPDATE_BRAND_SUCCESS', payload: data.data });
        } catch (err) {
            dispatch({ type: 'UPDATE_BRAND_FAILURE', payload: err.message });
        }
    };

    // GET TUTORIAL
    const getTutorial = async (merchantUniq) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await InformationsService.getTutorial(merchantUniq);
            dispatch({ type: 'GET_TUTORIAL_SUCCESS', payload: data.data });
        } catch (err) {
            dispatch({ type: 'GET_TUTORIAL_FAILURE', payload: err.message });
        }
    };

    // UPDATE TUTORIAL
    const updateTutorial = async (body) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await InformationsService.updateTutorial(body);
            dispatch({ type: 'UPDATE_TUTORIAL_SUCCESS', payload: data.data });
        } catch (err) {
            dispatch({ type: 'UPDATE_TUTORIAL_FAILURE', payload: err.message });
        }
    };

    // GET PRODUCTS
    const getProducts = async (merchantUniq) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await InformationsService.getProducts(merchantUniq);
            dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: data.data });
        } catch (err) {
            dispatch({ type: 'GET_PRODUCTS_FAILURE', payload: err.message });
        }
    };

    // UPDATE PRODUCT
    const updateProduct = async (body) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await InformationsService.updateProduct(body);
            dispatch({ type: 'UPDATE_PRODUCT_SUCCESS', payload: data.data });
        } catch (err) {
            dispatch({ type: 'UPDATE_PRODUCT_FAILURE', payload: err.message });
        }
    };

    return (
        <InformationsContext.Provider
            value={{
                isFetching: state.isFetching,
                error: state.error,
                brand: state.brand,
                tutorial: state.tutorial,
                products: state.products,
                getBrand,
                getTutorial,
                getProducts,
                updateBrand,
                updateTutorial,
                updateProduct,
            }}
        >
            {children}
        </InformationsContext.Provider>
    );
};

export default InformationsProvider;
