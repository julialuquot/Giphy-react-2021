import React from 'react';
import App from 'next/app';
import { appWithTranslation } from '@i18n';
import type { AppProps } from 'next/app';
import { ToastProvider } from 'react-toast-notifications';

import '@assets/styles/mains.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
            <Component {...pageProps} />
    );
};
MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};

export default appWithTranslation(MyApp);
