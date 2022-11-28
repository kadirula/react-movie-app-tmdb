import { createSlice } from '@reduxjs/toolkit'

export const genresReducer = createSlice({
  name: 'genres',
  initialState: {
    genres: null
  },
  reducers: {
    setGenres: (state, action) => {
      state.genres = action.payload
    }
  }
})

export const { setGenres } = genresReducer.actions

export default genresReducer.reducer