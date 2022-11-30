import { configureStore } from '@reduxjs/toolkit'
import genresReducer from './reducers/genresReducer'
import modalReducer from './reducers/modalReducer'

export default configureStore({
    reducer: {
        genres: genresReducer,
        modal: modalReducer
    }
})