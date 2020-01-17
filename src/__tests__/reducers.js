import reducer from '../reducers/movies';
import * as actions from '../actions/movies';

const INITIAL_STATE = {
  movies: {},
  lists: { myList: [] }
};
test('should handle SET_MOVIES', () => {
  const setMoviesAction = {
    type: 'SET_MOVIES',
    moviesList: [
      {

        id: 290859,
        title: 'Terminator: Dark Fate'
      },
      {
        id: 475557,
        title: 'Joker'

      }
    ]
  };
  // it's empty on purpose because it's just starting to fetch posts
  const expectedState = {
    movies: {
      '290859': {
        id: 290859,
        inMyList: false,
        title: 'Terminator: Dark Fate'
      },
      '475557': {
        id: 475557,
        inMyList: false,
        title: 'Joker'
      }
    },
    lists: {
      myList: []
    }
  };
  expect(reducer(INITIAL_STATE, setMoviesAction)).toEqual(expectedState);
});
