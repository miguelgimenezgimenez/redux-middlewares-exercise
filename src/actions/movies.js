export const getDiscover = (category) => (dispatch, getState, ApiClient) => {
	return ApiClient.getDiscoverMovies().then((moviesList) => {
		dispatch({
			type: 'SET_MOVIES',
			moviesList: moviesList
		});

		dispatch({
			type: 'SET_LISTS',
			listName: 'discover',
			list: moviesList
		});
		return Promise.resolve();
	});
};
