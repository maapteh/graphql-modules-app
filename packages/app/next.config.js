const webpack = require('webpack');
const withSass = require('@zeit/next-sass');

const localIdentName =
    process.env.NODE_ENV === 'development'
        ? '[local]__[hash:base64:5]'
        : '__[hash:base64:5]';

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        localIdentName,
        importLoaders: 1,
    },
    webpack: config => {
        config.module.rules.map(item => {
            const loader = item.use && item.use[0] && item.use[0].loader;
            if (loader === 'css-loader/locals') {
                item.use.unshift({
                    loader: 'dts-css-modules-loader',
                    options: {
                        namedExport: true,
                        banner: '// This file is generated automatically',
                    },
                });
            }
        });

        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.GRAPHQL_ENDPOINT': JSON.stringify(
                    process.env.GRAPHQL_ENDPOINT,
                ),
                'process.env.npm_package_version': JSON.stringify(
                    process.env.npm_package_version,
                ),
            }),
        );

        return config;
    },
    generateEtags: false,
});
