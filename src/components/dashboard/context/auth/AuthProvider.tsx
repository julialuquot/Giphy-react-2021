import React, { useReducer, useEffect } from 'react';
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

    let localState = null;
    if (typeof localStorage !== 'undefined' && localStorage.getItem('userInfo')) {
        localState = JSON.parse(localStorage.getItem('userInfo') || '');
    }

    const [state, dispatch] = useReducer(authReducer, localState || initialState);

    useEffect(() => {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('userInfo', JSON.stringify(state));
        }
    }, [state]);

    const userSignIn = async (body) => {
        try {
            dispatch({ type: 'START' });
            const data = await AuthService.signIn(body);
            dispatch({ type: 'USER_SIGN_IN_SUCCESS', payload: data });
        } catch (err) {
            dispatch({ type: 'FAILURE', payload: err });
        }
    };

    const userSignOut = async () => {
        try {
            dispatch({ type: 'START' });
            const data = await AuthService.signOut();
            dispatch({ type: 'USER_SIGN_OUT_SUCCESS', payload: data });
        } catch (err) {
            dispatch({ type: 'FAILURE', payload: err });
        }
    };

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
