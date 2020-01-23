export default {
	getDiscoverMovies: (category) => {
		return new Promise((resolve,reject) => {
			setTimeout(() => {
				resolve([
					{
						id: 475557,
	
						title: 'Joker'
					},
					{
						id: 290859,
	
						title: 'Terminator: Dark Fate'
					}
				]);
			}, 3000);

	
		})

	},
	getCategories: () => {
		return ['movies'];
	},
	getMoviesFromCategory: (id) => {
		return ['movies'];
	}
};
