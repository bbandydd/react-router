import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { browserHistory, Router, Route, Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import '../assets/styles/normalize';

import App from './components/app';
import autocomplete from './components/autocomplete';
import Rwd from './components/rwd';

injectTapEventPlugin();

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="autocomplete" component={autocomplete} />
        </Route>
        <Route path="/rwd" component={Rwd}>
        </Route>
    </Router>
    , document.getElementById('container'));

