export default {
	getDiscoverMovies: (category) => {
		return Promise.resolve([
			{
				id: 475557,

				title: 'Joker'
			},
			{
				id: 290859,

				title: 'Terminator: Dark Fate'
			}
		]);
	},
	getCategories: () => {
		return ['movies'];
	},
	getMoviesFromCategory: (id) => {
		return ['movies'];
	}
};
