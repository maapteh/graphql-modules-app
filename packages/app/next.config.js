/* const withSass = require('@zeit/next-sass');
module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    }
}); */
const webpack = require('webpack');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '__[hash:base64:5]', // '[local]__[hash:base64:5]'
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
            }),
        );

        return config;
    },
});
