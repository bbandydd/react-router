import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { browserHistory, Router, Route, Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import '../assets/styles/normalize';

import App from './components/app';
import Index from './components/index';
import Content from './components/content';

injectTapEventPlugin();

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        	<Route path="index" component={Index} />
        	<Route path="content" component={Content} />
        </Route>
    </Router>
    , document.getElementById('container'));

