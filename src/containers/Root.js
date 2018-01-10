import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import App from './App';
import Results from './Results';

const Root = ({ store }) => (
    <Provider store={store}>
        <div>
            <Route path="/" component={App} />
            <Route path="/:login"
                component={Results}
            />
        </div>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;
