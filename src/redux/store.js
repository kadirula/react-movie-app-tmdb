import { configureStore } from '@reduxjs/toolkit'
import genresReducer from './reducers/genresReducer'
import modalReducer from './reducers/modalReducer'
import searchReducer from './reducers/searchReducer'
import siteReducer from './reducers/siteReducer'

export default configureStore({
    reducer: {
        genres: genresReducer,
        modal: modalReducer,
        site: siteReducer,
        search: searchReducer
    }
})