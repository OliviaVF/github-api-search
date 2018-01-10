import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './containers/Root';
import createHistory from 'history/createBrowserHistory';

import App from 'containers/App';
import configureStoreWithHistory from './store';

const { store, history } = configureStoreWithHistory();

render(
    <Router>
        <Root store={store} />
    </Router>,
    document.getElementById('root')
);
