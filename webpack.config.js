const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src/client'),
    entry: {
        index: './index'
    },
    mode: "development",
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "built"),
        filename: '[name].js'
    },

    module: {
        rules: [{
            test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Booking',
            hash: true,
            template: './index.html'
        }),
    ],
};
