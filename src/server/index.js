import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config';

import handleRender from './handleRender';

const port = 8080;
const server = express();
const compiler = webpack(webpackConfig);

server.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
server.use(webpackHotMiddleware(compiler));
server.use(express.static('public'));
server.get('/index.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../../built/index.js'));
});
server.get('/*', handleRender);

server.listen(port, () => {
    console.log(`Express listening on port ${port}!`);
});
