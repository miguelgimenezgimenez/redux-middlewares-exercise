export const getCategories = (dispatch, getstate, ApiClient) => {
    ApiClient.getCategories()
        .then((categories) =>
            Promise.all(
                categories.map(({ id, name }) =>
                    ApiClient.getMoviesFromCategory(id).then((moviesList) => {
                        dispatch({ type: 'SET_MOVIES', moviesList });
                        dispatch({ type: 'SET_LISTS', listName: name, list: moviesList });
                    })
                )
            )
        )
        .then(() => {
            console.log('finished');
        });
};

export const getDiscover = (dispatch, getState, ApiClient) => {
    ApiClient.getDiscoverMovies().then((moviesList) => {
        dispatch({
            type: 'SET_MOVIES',
            moviesList
        });
        dispatch({
            type: 'SET_LISTS',
            listName: 'discover',
            list: moviesList
        });
    });
};
