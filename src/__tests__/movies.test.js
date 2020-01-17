import store from '../store';
import { getDiscover } from '../actions/movies';
import ApiClient from '../Services/__mocks__/ApiClient';

test('fetches results from google books api', () => {
	return getDiscover('discover')(store.dispatch, store.getState, ApiClient).then((res) => {
		const currentState = store.getState();
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
				discover: [475557, 290859],
				myList: []
			}
		};
		expect(currentState.movies).toEqual(expectedState);
	});
});
