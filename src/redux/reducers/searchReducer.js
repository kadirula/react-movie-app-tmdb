import { createSlice } from '@reduxjs/toolkit'

export const searchReducer = createSlice({
  name: 'search',
  initialState: {
    searchMovie: null
  },
  reducers: {
    setSearchMovie: (state, action) => {
      state.searchMovie = action.payload
    }
  }
})

export const { setSearchMovie } = searchReducer.actions

export default searchReducer.reducer