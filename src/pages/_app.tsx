import React from 'react';
import App from 'next/app';
import { appWithTranslation } from '@i18n';
import type { AppProps } from 'next/app';
import { ToastProvider } from 'react-toast-notifications';
import Toast from '@components/common/ToastNotifications/Toast/Toast';
import ToastContainer from '@components/common/ToastNotifications/ToastContainer/ToastContainer';
import '@assets/styles/mains.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ToastProvider
            components={{ Toast: Toast, ToastContainer: ToastContainer }}
            placement={'top-right'}
            autoDismissTimeout={5000}
        >
            <Component {...pageProps} />
        </ToastProvider>
    );
};
MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};

export default appWithTranslation(MyApp);
