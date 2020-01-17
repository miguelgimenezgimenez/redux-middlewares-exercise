import ApiClient from '../Services/ApiClient';

const middleware = (store) => (next) => (action) => {
	if (typeof action === 'function') {
		action(store.dispatch, store.getState, ApiClient);
	} else {
		next(action);
	}
};

export default middleware;
