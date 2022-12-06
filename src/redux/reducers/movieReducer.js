import { createSlice } from '@reduxjs/toolkit'

export const movieReducer = createSlice({
    name: 'movie',
    initialState: {
        movies: null,
        movieDetail: null,
        upcomingMovies: null,
        topRatedMovies: null,
        popularMovies: null,
        nowPlayingMovies: null,
        movieGenres: null,
        comments: null,
        cast: null, // oyuncu kadrosu
        images: null,
        videos: null
    },
    reducers: {
        setMovieDetail: (state, action) => {
            state.movieDetail = action.payload
        },
        setMovies: (state, action) => {
            state.movies = action.payload
        },
        setUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        },
        setTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        setPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        setNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        setMovieGenres: (state, action) => {
            state.movieGenres = action.payload
        },
        setComments: (state, action) => {
            state.comments = action.payload
        },
        setCast: (state, action) => {
            state.cast = action.payload
        },
        setImages: (state, action) => {
            state.images = action.payload
        },
        setVideos: (state, action) => {
            state.videos = action.payload
        },
    }
})

export const {
    setMovieDetail,
    setMovies,
    setUpcomingMovies,
    setTopRatedMovies,
    setPopularMovies,
    setNowPlayingMovies,
    setMovieGenres,
    setComments,
    setCast,
    setImages,
    setVideos
} = movieReducer.actions

export default movieReducer.reducer