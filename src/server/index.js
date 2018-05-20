import express from 'express';
import path from 'path';

//
// const webpack = require("webpack");
// const config = require("../../webpack.config.js")({}, {});
// const webpackDevMiddleware = require("webpack-dev-middleware");
// const webpackHotMiddleware = require("webpack-hot-middleware");
// const compiler = webpack(config);
//

import handleRender from './handleRender';

const port = 8080;
const server = express();

// server.use(webpackDevMiddleware(compiler, {
// 	publicPath: config.output.publicPath
// }));
// server.use(webpackHotMiddleware(compiler, {
// 	log: console.log
// }));
server.use(express.static('public'));
server.get('/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../../index.js'));
});
server.get('/*', handleRender);

server.listen(port, () => {
    console.log(`Express listening on port ${port}!`);
});
