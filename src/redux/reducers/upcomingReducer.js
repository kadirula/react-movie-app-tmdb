import { createSlice } from '@reduxjs/toolkit'

export const upcomingReducer = createSlice({
  name: 'upcoming',
  initialState: {
    upcomingMovies: null
  },
  reducers: {
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload
    }
  }
})

export const { setUpcomingMovies } = upcomingReducer.actions

export default upcomingReducer.reducer