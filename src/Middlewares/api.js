const middleware = (store) => (next) => (action) => {
	const api = action.api;
	if (!api) return next(action);

	const method = api.method || 'GET';

	const body = api.body ? JSON.stringify(api.body) : undefined;

	const defaultHeaders = {
		'Content-Type': 'application/json'
		// After note: possibility to attach the token automatically if present in the store
	};
	const headers = {
		...defaultHeaders,
		...api.headers
	};

	next({
		type: `${action.type}_REQUEST`
	});
	fetch(`${BASE_URL}/${api.url}/`, {
		method,
		body,
		headers
	})
		.then((res) => res.json())
		.then((data) => {
			store.dispatch({
				type: `${action.type}_SUCCESS`,
				data
			});
		})
		.catch((error) => {
			store.dispatch({
				type: `${action.type}_FAILURE`,
				error
			});
		});
};
