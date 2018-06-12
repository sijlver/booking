import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { matchRoutes } from 'react-router-config';
import 'isomorphic-fetch';

import { routes } from '../client/navigations';
import store from '../client/store';
import App from '../client/App';

const render = html => (
    `<!DOCTYPE html>
    <html lang="en">
       <head>
          <meta charset="UTF-8">
          <title>App</title>
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
       </head>
       <body>
          <div id="app">${html}</div>
          <script src="/js/main.js"></script>
       </body>
    </html>`
);

const handleRender = () => (req, res) => {
    const branch = matchRoutes(routes, req.url);
    const promises = branch.map(({ route, match }) => {
        const { fetchData } = route.component;

        if (!(fetchData instanceof Function)) {
            return Promise.resolve(null);
        }
        return fetchData(store.dispatch, match);
    });

    return Promise.all(promises)
        .then(() => {
            const context = {};
            const app = (
                <Provider store={store}>
                    <Router location={req.url} context={context}>
                        <App />
                    </Router>
                </Provider>
            );
            const html = renderToString(app);

            if (context.url) {
                return res.redirect(context.url);
            }
            res.send(render(html));
        });
};

export default handleRender;
