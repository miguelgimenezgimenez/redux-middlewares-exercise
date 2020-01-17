import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducers from './reducers';
import thunk from './Middlewares/thunk';

export default createStore(combineReducers(reducers), applyMiddleware(thunk));
