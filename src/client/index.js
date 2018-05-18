import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { RootNavigation } from './navigations';
import store from './store';

hydrate((
    <Provider store={store}>
        <Router>
            <RootNavigation />
        </Router>
    </Provider>
), document.getElementById('app'));
