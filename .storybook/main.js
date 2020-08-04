const path = require('path');

module.exports = {
    stories: ['../stories/**/*.stories.js'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/preset-typescript',
        '@storybook/addon-docs',
    ],

    webpackFinal: async (config, {configType}) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    },
                },
                'sass-loader',
            ],
            include: path.resolve(__dirname, '../'),
        });

        // Return the altered config
        return config;
    },
};
