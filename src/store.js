import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducers from './reducers';
import thunk from './Middlewares/thunk';
import logger from './Middlewares/logger';

export default createStore(combineReducers(reducers), applyMiddleware(thunk, logger));
