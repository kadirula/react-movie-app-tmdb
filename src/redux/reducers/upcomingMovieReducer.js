import { createSlice } from '@reduxjs/toolkit'

export const upcomingMovieReducer = createSlice({
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

export const { setUpcomingMovies } = upcomingMovieReducer.actions

export default upcomingMovieReducer.reducer