import React from 'react';
import App from 'next/app';
import { appWithTranslation } from '@i18n';
import type { AppProps } from 'next/app';
import '@assets/styles/mains.scss';
import AuthProvider from '@components/dashboard/context/auth/AuthProvider';
import InformationsProvider from '@components/dashboard/context/informations/InformationsProvider';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <AuthProvider>
            <InformationsProvider>
                <Component {...pageProps} />
            </InformationsProvider>
        </AuthProvider>
    );
};
MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};

export default appWithTranslation(MyApp);
