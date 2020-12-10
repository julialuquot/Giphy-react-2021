import React, { useReducer, useCallback } from 'react';
import AuthContext from './AuthContext';
import authReducer from './AuthReducer';
import AuthService from '@services/domain/AuthService';

type AuthProviderProps = {
    children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
    const initialState = {
        isFetching: false,
        error: null,
        stayConnected: null,
        user: null,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const userSignIn = useCallback(async (body) => {
        try {
            dispatch({ type: 'START' });
            const data = await AuthService.signIn(body);
            dispatch({ type: 'USER_SIGN_IN_SUCCESS', payload: data });
        } catch (err) {
            dispatch({ type: 'FAILURE', payload: err.message });
        }
    }, []);

    const userSignOut = useCallback(async () => {
        try {
            dispatch({ type: 'START' });
            const data = await AuthService.signOut();
            dispatch({ type: 'USER_SIGN_OUT_SUCCESS', payload: data });
        } catch (err) {
            dispatch({ type: 'FAILURE', payload: err.message });
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                responseStatus: state.responseStatus,
                isFetching: state.isFetching,
                error: state.error,
                user: state.user,
                userSignIn,
                userSignOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
