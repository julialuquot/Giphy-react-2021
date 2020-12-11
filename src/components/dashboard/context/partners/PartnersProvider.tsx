import React, { useCallback, useReducer } from 'react';
import PartnersContext from './PartnersContext';
import partnersReducer from './PartnersReducer';
import PartnersService from '@services/domain/PartnersService';

type PartnersProviderProps = {
    children: React.ReactNode;
};

const PartnersProvider = ({ children }: PartnersProviderProps) => {
    const initialState = {
        isFetching: false,
        error: null,
        partners: [],
        showNotificationSuccess: {
            suspendPartner: false,
            activatePartner: false,
        },
    };

    const [state, dispatch] = useReducer(partnersReducer, initialState);

    const getAllPartners = useCallback(async () => {
        try {
            dispatch({ type: 'FETCH_START' });
            const data = await PartnersService.getAllPartners();
            dispatch({ type: 'GET_ALL_PARTNERS_SUCCESS', payload: data.data });
        } catch (err) {
            dispatch({ type: 'FETCH_FAILURE', payload: err.message });
        }
    }, []);

    const suspendPartner = useCallback(async (body) => {
        try {
            dispatch({ type: 'FETCH_START' });
            await PartnersService.suspendPartner(body);
            dispatch({ type: 'SUSPEND_PARTNERS_SUCCESS', payload: body });
        } catch (err) {
            dispatch({ type: 'FETCH_FAILURE', payload: err.message });
        }
    }, []);

    const activatePartner = useCallback(async (body) => {
        try {
            dispatch({ type: 'FETCH_START' });
            await PartnersService.activatePartner(body);
            dispatch({ type: 'ACTIVE_PARTNERS_SUCCESS', payload: body });
        } catch (err) {
            dispatch({ type: 'FETCH_FAILURE', payload: err.message });
        }
    }, []);

    return (
        <PartnersContext.Provider
            value={{
                isFetching: state.isFetching,
                error: state.error,
                partners: state.partners,
                showNotificationSuccess: state.showNotificationSuccess,
                getAllPartners,
                suspendPartner,
                activatePartner,
            }}
        >
            {children}
        </PartnersContext.Provider>
    );
};

export default PartnersProvider;
