import { createSlice } from '@reduxjs/toolkit'

export const movieReducer = createSlice({
    name: 'movie',
    initialState: {
        upcomingMovies: null,
        topRatedMovies: null,
        popularMovies: null,
        nowPlayingMovies: null
    },
    reducers: {
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
    }
})

export const { setUpcomingMovies, setTopRatedMovies, setPopularMovies, setNowPlayingMovies } = movieReducer.actions

export default movieReducer.reducer