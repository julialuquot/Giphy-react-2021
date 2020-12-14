const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const path = require('path');
const webpack = require('webpack');

const { parsed: environment } = require('dotenv').config({ path: path.resolve('env', `.env.${process.env.NODE_ENV}`) });

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer(
    withCSS(
        withSass({
            cssModules: true,
            cssLoaderOptions: {
                importLoaders: 1,
                localIdentName: '[local]___[hash:base64:5]',
            },
            webpack(config) {
                const envKeys = Object.keys(environment).reduce((prev, next) => {
                    prev[`process.env.${next}`] = JSON.stringify(environment[next]);
                    return prev;
                }, {});

                config.plugins.push(new webpack.DefinePlugin(envKeys));

                config.module.rules.push({
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                });

                config.resolve.alias['@components'] = path.join(__dirname, '/src/components');
                config.resolve.alias['@assets'] = path.join(__dirname, '/src/assets');
                config.resolve.alias['@validations'] = path.join(__dirname, '/src/validations');
                config.resolve.alias['@i18n'] = path.join(__dirname, '/src/i18n.js');

                return config;
            },
        }),
    ),
);
