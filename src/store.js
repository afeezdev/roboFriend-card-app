import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';

const middlewares = [ thunkMiddleware ];

if (process.env.NODE_ENV === 'development') {
    middlewares.push( logger)
}

export const store = createStore(rootReducer,applyMiddleware(...middlewares));

