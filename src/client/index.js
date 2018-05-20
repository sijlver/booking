import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { RootNavigation } from './navigations';
import store from './store';

render((
    <Provider store={store}>
        <Router>
            <RootNavigation />
        </Router>
    </Provider>
), document.getElementById('app'));
