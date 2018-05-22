import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from '../../components';
import { HomePage, AboutPage, NotFoundPage, HotelPage } from '../../pages';

class RootNavigation extends Component {
    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/about' component={AboutPage} />
                    <Route path='/hotel/:id' component={HotelPage} />
                    <Route path='*' component={NotFoundPage} />
                </Switch>
            </div>
        );
    }
}

export default RootNavigation;
