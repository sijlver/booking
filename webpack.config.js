const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function conf(env, options) {
    const isProduction = options.mode === 'production';

    const config = {
        context: path.join(__dirname, 'src/client'),
        entry: [
            './index',
        ],
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'none' : 'source-map',

        resolve: {
            extensions: ['.js', '.jsx'],
        },

        module: {
            rules: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }],
        },

        plugins: [
            new HtmlWebpackPlugin({
                title: 'App',
                hash: true,
                template: path.resolve(__dirname, './src/index.html'),
            }),
        ],

        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/src',
            filename: 'bundle.js',
        },
    };

    if (isProduction) {
        config.plugins.push(new ExtractTextPlugin({
            filename: 'style.css',
        }));
        config.module.rules.push({
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader'],
            }),
        });
    } else {
        config.entry = ['webpack-hot-middleware/client'].concat(config.entry);
        config.plugins = config.plugins.concat([
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
        ]);
        config.module.rules.push({
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        });
    }

    return config;
};
