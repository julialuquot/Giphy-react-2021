import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import authReducer from './AuthReducer';
import AuthService from '@services/domain/AuthService';

type AuthProviderProps = {
    children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
    const initialState = {
        isFetching: false,
        responseStatus: null,
        error: null,
        stayConnected: null,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const userSignIn = async (body) => {
        try {
            dispatch({ type: 'USER_SIGN_IN_START' });
            const data = await AuthService.signIn(body);
            dispatch({ type: 'USER_SIGN_IN_SUCCESS', payload: data });
        } catch (err) {
            dispatch({ type: 'USER_SIGN_IN_FAILURE', payload: err });
        }
    };

    return (
        <AuthContext.Provider
            value={{
                responseStatus: state.responseStatus,
                isFetching: state.isFetching,
                error: state.error,
                userSignIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
