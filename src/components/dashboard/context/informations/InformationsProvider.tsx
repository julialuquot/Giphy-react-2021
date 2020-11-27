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
        products: [],
    };

    const [state, dispatch] = useReducer(informationsReducer, initialState);

    // Get BRAND informations
    const getBrand = async (merchantUniq) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await InformationsService.getBrand(merchantUniq);
            dispatch({ type: 'GET_BRAND_SUCCESS', payload: data });
        } catch (err) {
            dispatch({ type: 'GET_BRAND_FAILURE', payload: err.message });
        }
    };

    // update BRAND informations
    const updateBrand = async (body) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await InformationsService.updateBrand(body);
            dispatch({ type: 'UPDATE_BRAND_SUCCESS', payload: data });
        } catch (err) {
            dispatch({ type: 'UPDATE_BRAND_FAILURE', payload: err.message });
        }
    };

    // GET PRODUCTS informations
    const getProducts = async (merchantUniq) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await InformationsService.getProducts(merchantUniq);
            dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: data.data });
        } catch (err) {
            dispatch({ type: 'GET_PRODUCTS_FAILURE', payload: err.message });
        }
    };

    // UPDATE PRODUCT informations
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
                products: state.products,
                getBrand,
                getProducts,
                updateBrand,
                updateProduct,
            }}
        >
            {children}
        </InformationsContext.Provider>
    );
};

export default InformationsProvider;
