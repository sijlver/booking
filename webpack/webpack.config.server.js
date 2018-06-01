const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: './src/server/handleRender.js',
  externals: [nodeExternals()],
  output: {
    filename: 'js/handleRender.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /src/,
        use: [
          'css-loader/locals',
        ],
      },
    ],
  },
});
