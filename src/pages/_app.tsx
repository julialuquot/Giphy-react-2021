import React from 'react';
import { appWithTranslation } from '../i18n';
import type { AppProps } from 'next/app';
import '@assets/styles/mains.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp);
