const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

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
                // config.module.rules.push({ test: /\.tsx?$/, loader: 'ts-loader' });
                // config.resolve = {
                //     extensions: ['.tsx', '.ts', '.js'],
                // };

                // config.resolve.alias['@components'] = path.join(__dirname, '/src/components');
                // config.resolve.alias['@assets'] = path.join(__dirname, '/src/assets');
                // config.resolve.alias['@validations'] = path.join(__dirname, '/src/validations');
                // config.resolve.alias['@i18n'] = path.join(__dirname, '/src/i18n.js');

                return config;
            },
        }),
    ),
);
