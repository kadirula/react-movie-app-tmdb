import { configureStore } from '@reduxjs/toolkit'
import genresReducer from './reducers/genresReducer'
import topRatedMovieReducer from './reducers/topRatedMovieReducer'
import upcomingMovieReducer from './reducers/upcomingMovieReducer'

export default configureStore({
    reducer: {
        upcoming: upcomingMovieReducer,
        top_rated: topRatedMovieReducer,
        genres: genresReducer
    }
})