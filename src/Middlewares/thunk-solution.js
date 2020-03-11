import ApiClient from '../Services/ApiClient';

const thunk = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState, ApiClient);
    }
    return next(action);
};


export default thunk;
