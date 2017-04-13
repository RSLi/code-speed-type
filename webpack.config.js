var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
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
