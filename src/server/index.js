import express from 'express';
import path from 'path';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';

// import webpackConfig from '../../webpack.config.config-dev-ssr.js';
import handleRender from './handleRender';

const port = 8080;
const server = express();
// const compiler = webpack(webpackConfig);

// server.use(webpack(compiler, {}));
server.use(express.static('public'));
server.get('/index.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../../built/index.js'));
});
server.get('/*', handleRender);

server.listen(port, () => {
    console.log(`Express listening on port ${port}!`);
});
