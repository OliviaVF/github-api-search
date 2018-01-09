import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware  } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import api from '../middleware/api'
import reducer from '../reducers/index';

const composeEnhancers =  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const history = createHistory();

export default function configureStore(initialState) {
  const middleware = applyMiddleware(
    // promiseMiddleware(),
    thunk,
    api,
    routerMiddleware(history)
  );

  const store = createStore(reducer, initialState = {}, composeEnhancers(middleware));
  return {
    store,
    history
  }
}
