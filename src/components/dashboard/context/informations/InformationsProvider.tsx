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
    };

    const [state, dispatch] = useReducer(informationsReducer, initialState);

    // Get brand informations for user
    const getBrand = async (body) => {
        try {
            dispatch({ type: 'GET_BRAND_START' });
            const data = await InformationsService.getBrand(body);
            dispatch({ type: 'GET_BRAND_SUCCESS', payload: data });
        } catch (err) {
            dispatch({ type: 'GET_BRAND_FAILURE', payload: err.message });
        }
    };

    return (
        <InformationsContext.Provider
            value={{
                isFetching: state.isFetching,
                error: state.error,
                brand: state.brand,
                getBrand,
            }}
        >
            {children}
        </InformationsContext.Provider>
    );
};

export default InformationsProvider;
