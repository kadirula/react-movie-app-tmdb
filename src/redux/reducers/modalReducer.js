import { createSlice } from '@reduxjs/toolkit'

export const modalReducer = createSlice({
  name: 'modal',
  initialState: {
    movieModal: {
      modal: false,
      movie: null
    }
  },
  reducers: {
    setMovieModal: (state, action) => {
      state.movieModal = action.payload
    }
  }
})

export const { setMovieModal } = modalReducer.actions

export default modalReducer.reducer