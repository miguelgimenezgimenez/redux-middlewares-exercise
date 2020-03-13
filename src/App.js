import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Navbar from './Components/Navbar';
import MovieList from './Components/MovieList';
import Spinner from './Components/Spinner';
import { getDiscover } from './actions/movies';

import './App.css';

const App = ({ lists, movies, getDiscover, getCategories }) => {
    useEffect(
        () => {
            getDiscover();
        },
        [  ]
    );
    return (
        <div className="App_dashboard">
            <div className="App">
                <Navbar />
                {true ? (
                    Object.keys(lists).map((cat) => (
                        <MovieList key={cat} movies={lists[cat].map((id) => movies[id])} title={cat} />
                    ))
                ) : (
                    <div className="App_loader">
                        <Spinner />
                    </div>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    lists: state.movies.lists,
    movies: state.movies.movies
});

const mapDispatchToProps = (dispatch) => ({
    getDiscover: () => dispatch(getDiscover),
    bypass: () => dispatch({type:"BYPASS"}),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

