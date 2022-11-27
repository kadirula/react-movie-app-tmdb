import { configureStore } from '@reduxjs/toolkit'
import upcomingReducer from './reducers/upcomingReducer'

export default configureStore({
    reducer: {
        upcoming: upcomingReducer
    }
})