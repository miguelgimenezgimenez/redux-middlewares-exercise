const INITIAL_STATE = {
	movies: {},
	lists: { myList: [] }
};

function setMovies(state, moviesList) {
	const prevMovies = { ...state.movies };
	const newList = moviesList.reduce((acc, next) => {
		return {
			...acc,
			[next.id]: { ...next, inMyList: false }
		};
	}, {});
	return { ...state, movies: { ...prevMovies, ...newList } };
}

function setLists(state, name, list) {
	return {
		...state,
		lists: {
			...state.lists,
			[name]: list.map((mov) => mov.id)
		}
	};
}

function addToMyList(state, id) {
	const prevLists = state.lists;
	const prevMovies = state.movies;

	const updatedLists = {
		...prevLists,
		myList: prevLists.myList.includes(id)
			? prevLists.myList.filter((movId) => movId !== id)
			: [...prevLists.myList, id]
	};
	const updatedMovies = {
		...prevMovies,
		[id]: { ...prevMovies[id], myList: !prevMovies[id].inMyList }
	};

	return { ...state, movies: updatedMovies, lists: updatedLists };
}

export default (state = INITIAL_STATE, action) => {
	// console.log(action);
	switch (action.type) {
		case 'SET_MOVIES':
			return setMovies(state, action.moviesList);
		case 'SET_LISTS':
			return setLists(state, action.listName, action.list);
		case 'ADD_TO_MY_LIST':
			return addToMyList(state, action.id);
		default:
			return state;
	}
};
