const withSass = require('@zeit/next-sass');
module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
    },
    webpack(config, options) {
        // config.module.rules.push({ test: /\.tsx?$/, loader: 'ts-loader' });
        config.resolve = {
            extensions: ['.tsx', '.ts', '.js'],
        };
        console.log(config);

        return config;
    },
});
