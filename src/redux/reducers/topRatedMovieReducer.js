import { createSlice } from '@reduxjs/toolkit'

export const topRatedMovieReducer = createSlice({
  name: 'top_rated',
  initialState: {
    topRatedMovies: null
  },
  reducers: {
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload
    }
  }
})

export const { setTopRatedMovies } = topRatedMovieReducer.actions

export default topRatedMovieReducer.reducer