import React from 'react';
import MovieList from '../Components/MovieList/index';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
test('TodoComponent renders the text inside it', () => {
	const movies = [
		{
			id: 475557,

			title: 'Joker'
		},
		{
			id: 290859,

			title: 'Terminator: Dark Fate'
		}
	];
	const wrapper = mount(<MovieList movies={movies} title="discover" />);

	const title = wrapper.find('h3.movie_headline_title');
	expect(title.length).toEqual(2);
	const titleText = title.map((t) => {
		return t.text();
	});
	expect(titleText).toEqual(['Joker', 'Terminator: Dark Fate']);
});
