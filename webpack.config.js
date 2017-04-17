var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'speedtype_bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        })
    ]
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         "$":"jquery",
    //         "jQuery":"jquery",
    //         "window.jQuery":"jquery"
    //     })
    // ],
    // resolve : {
    //     alias: {
    //       // bind version of jquery-ui
    //       "jquery-ui": "jquery-ui/jquery-ui.js",
    //       // bind to modules;
    //       modules: path.join(__dirname, "node_modules")
    //     }
    // }
};
