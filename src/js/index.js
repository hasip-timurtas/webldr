import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router';
import MainLayout from './components/layouts/mainLayout';
import HomePage from './components/pages/homepage';


render((
    <Router history={hashHistory}>
        <Route path="/" component={MainLayout}>
            <IndexRoute component={HomePage}/>
            <Route path="kurumsal" name="denemedir" component={HomePage}/>

        </Route>
    </Router>
), document.getElementById('app'))