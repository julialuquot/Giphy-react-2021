import React, { useCallback, useEffect, useReducer } from 'react';
import InformationsContext from './InformationsContext';
import informationsReducer from './InformationsReducer';
import InformationsService from '@services/domain/InformationsService';
import { useToasts } from 'react-toast-notifications';
import { useTranslation } from '@i18n';

type InformationsProviderProps = {
    children: React.ReactNode;
};

const InformationsProvider = ({ children }: InformationsProviderProps) => {
    const { addToast } = useToasts();
    const { t } = useTranslation('common');

    const initialState = {
        isFetching: false,
        error: null,
        brand: {},
        tutorial: [],
        products: [],
    };

    const [state, dispatch] = useReducer(informationsReducer, initialState);

    useEffect(() => {
        state.error &&
            addToast(t(`common:errors.${state.error}`), {
                appearance: 'error',
                autoDismiss: true,
            });
    }, [addToast, state.error, t]);

    /* BRAND */
    const getBrand = useCallback(async (merchantUniq) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await InformationsService.getBrand(merchantUniq);
            dispatch({ type: 'GET_BRAND_SUCCESS', payload: data.data });
        } catch (err) {
            dispatch({ type: 'GET_BRAND_FAILURE', payload: err.message });
        }
    }, []);

    const updateBrand = useCallback(async (body) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await InformationsService.updateBrand(body);
            dispatch({ type: 'UPDATE_BRAND_SUCCESS', payload: data.data });
        } catch (err) {
            dispatch({ type: 'UPDATE_BRAND_FAILURE', payload: err.message });
        }
    }, []);

    /* TUTORIAL */
    const getTutorial = useCallback(async (merchantUniq) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await InformationsService.getTutorial(merchantUniq);
            dispatch({ type: 'GET_TUTORIAL_SUCCESS', payload: data.data });
        } catch (err) {
            dispatch({ type: 'GET_TUTORIAL_FAILURE', payload: err.message });
        }
    }, []);

    const updateTutorial = useCallback(async (body) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await InformationsService.updateTutorial(body);
            dispatch({ type: 'UPDATE_TUTORIAL_SUCCESS', payload: data.data });
        } catch (err) {
            dispatch({ type: 'UPDATE_TUTORIAL_FAILURE', payload: err.message });
        }
    }, []);

    /* PRODUCTS */
    const getProducts = useCallback(async (merchantUniq) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await InformationsService.getProducts(merchantUniq);
            dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: data.data });
        } catch (err) {
            dispatch({ type: 'GET_PRODUCTS_FAILURE', payload: err.message });
        }
    }, []);

    const updateProduct = useCallback(async (body) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await InformationsService.updateProduct(body);
            dispatch({ type: 'UPDATE_PRODUCT_SUCCESS', payload: data.data });
        } catch (err) {
            dispatch({ type: 'UPDATE_PRODUCT_FAILURE', payload: err.message });
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
