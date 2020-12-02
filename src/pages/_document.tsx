import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="fr">
                <Head />
                <link rel="preload" href="/front-static/fonts/Poppins-Regular.woff2" as="font" crossOrigin="" />
                <link rel="preload" href="/front-static/fonts/Poppins-Bold.woff2" as="font" crossOrigin="" />
                <link rel="preload" href="/front-static/fonts/Poppins-BoldItalic.woff2" as="font" crossOrigin="" />
                <link rel="preload" href="/front-static/fonts/Poppins-Italic.woff2" as="font" crossOrigin="" />
                <link rel="preload" href="/front-static/fonts/Poppins-Medium.woff2" as="font" crossOrigin="" />
                <link rel="preload" href="/front-static/fonts/Poppins-MediumItalic.woff2" as="font" crossOrigin="" />
                <link rel="preload" href="/front-static/fonts/Poppins-SemiBold.woff2" as="font" crossOrigin="" />
                <link rel="preload" href="/front-static/fonts/Poppins-SemiBoldItalic.woff2" as="font" crossOrigin="" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
