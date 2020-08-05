import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="fr">
                <Head />
                <link rel="preload" href="/fonts/Poppins-Regular.woff2" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/Poppins-Bold.woff2" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/Poppins-BoldItalic.woff2" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/Poppins-Italic.woff2" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/Poppins-Medium.woff2" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/Poppins-MediumItalic.woff2" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/Poppins-SemiBold.woff2" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/Poppins-SemiBoldItalic.woff2" as="font" crossOrigin="" />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
