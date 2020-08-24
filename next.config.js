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

                return config;
            },
        }),
    ),
);
