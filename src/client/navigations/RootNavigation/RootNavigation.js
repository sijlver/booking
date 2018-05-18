import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { HomePage } from '../../pages';

class RootNavigation extends Component {
    render() {
        return(
            <div>
                <Route path='/' component={HomePage} />
            </div>
        );
    }
}

export default RootNavigation;
