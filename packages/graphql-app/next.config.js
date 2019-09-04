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
    cssModules: false,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
    webpack: (config) => {
        config.plugins.push(
          new webpack.DefinePlugin({
            'process.env.GRAPHQL_ENDPOINT': JSON.stringify(process.env.GRAPHQL_ENDPOINT),
          })
        );

        return config;
      },
});
