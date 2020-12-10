import React, { useCallback, useReducer } from 'react';
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
        showNotificationSuccess: false,
    };

    const [state, dispatch] = useReducer(informationsReducer, initialState);

    /* BRAND */
    const getBrand = useCallback(async (partnerUniq) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await InformationsService.getBrand(partnerUniq);
            dispatch({ type: 'GET_BRAND_SUCCESS', payload: data.data });
        } catch (err) {
            dispatch({ type: 'FETCH_FAILURE', payload: err.message });
        }
    }, []);

    const updateBrand = useCallback(async (body) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await InformationsService.updateBrand(body);
            dispatch({ type: 'UPDATE_BRAND_SUCCESS', payload: data.data });
        } catch (err) {
            dispatch({ type: 'FETCH_FAILURE', payload: err.message });
        }
    }, []);

    /* TUTORIAL */
    const getTutorial = useCallback(async (partnerUniq) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await InformationsService.getTutorial(partnerUniq);
            dispatch({ type: 'GET_TUTORIAL_SUCCESS', payload: data.data });
        } catch (err) {
            dispatch({ type: 'FETCH_FAILURE', payload: err.message });
        }
    }, []);

    const updateTutorial = useCallback(async (body) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await InformationsService.updateTutorial(body);
            dispatch({ type: 'UPDATE_TUTORIAL_SUCCESS', payload: data.data });
        } catch (err) {
            dispatch({ type: 'FETCH_FAILURE', payload: err.message });
        }
    }, []);

    /* PRODUCTS */
    const getProducts = useCallback(async (partnerUniq) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await InformationsService.getProducts(partnerUniq);
            dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: data.data });
        } catch (err) {
            dispatch({ type: 'FETCH_FAILURE', payload: err.message });
        }
    }, []);

    const updateProduct = useCallback(async (body) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await InformationsService.updateProduct(body);
            dispatch({ type: 'UPDATE_PRODUCT_SUCCESS', payload: data.data });
        } catch (err) {
            dispatch({ type: 'FETCH_FAILURE', payload: err.message });
        }
    }, []);

    return (
        <InformationsContext.Provider
            value={{
                isFetching: state.isFetching,
                error: state.error,
                brand: state.brand,
                tutorial: state.tutorial,
                products: state.products,
                showNotificationSuccess: state.showNotificationSuccess,
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
