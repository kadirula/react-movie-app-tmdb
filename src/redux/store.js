import { configureStore } from '@reduxjs/toolkit'
import topRatedMovieReducer from './reducers/topRatedMovieReducer'
import upcomingMovieReducer from './reducers/upcomingMovieReducer'

export default configureStore({
    reducer: {
        upcoming: upcomingMovieReducer,
        top_rated: topRatedMovieReducer
    }
})