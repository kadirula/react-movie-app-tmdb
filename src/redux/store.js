import { configureStore } from '@reduxjs/toolkit'
import commentReducer from './reducers/commentReducer'
import genresReducer from './reducers/genresReducer'
import modalReducer from './reducers/modalReducer'
import movieReducer from './reducers/movieReducer'
import searchReducer from './reducers/searchReducer'
import siteReducer from './reducers/siteReducer'

export default configureStore({
    reducer: {
        movie: movieReducer,
        genres: genresReducer,
        modal: modalReducer,
        site: siteReducer,
        search: searchReducer,
        comment: commentReducer
    }
})