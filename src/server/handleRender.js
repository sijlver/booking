import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'isomorphic-fetch';

import store from '../client/store';
import { RootNavigation } from '../client/navigations';

const render = (html) => (
    `<!DOCTYPE html>
    <html lang="en">
       <head>
          <meta charset="UTF-8">
          <title>App</title>
       </head>
       <body>
          <div id="app">${html}</div>
          <script src="index.js"></script>
       </body>
    </html>`
);

const handleRender = (req, res) => {
    const context = {};
    const app = (
        <Provider store={store}>
            <Router location={req.url} context={context}>
                <RootNavigation />
            </Router>
        </Provider>
    );
    const html = renderToString(app);

    if (context.url) {
        return res.redirect(context.url);
    }
    res.send(render(html));
};

export default handleRender;
