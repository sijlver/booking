import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './routes';

class RootNavigation extends Component {
    render() {
        return (
            <div>
                <Switch>
                    {renderRoutes(routes)}
                </Switch>
            </div>
        );
    }
}

export default RootNavigation;
