import { createStore, applyMiddleware } from 'redux';

import combineReducers from '../reducers';
import { requestMiddleware } from '../middlewares';

export default createStore(combineReducers, applyMiddleware(requestMiddleware));
