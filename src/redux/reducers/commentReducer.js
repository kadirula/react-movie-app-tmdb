import { createSlice } from '@reduxjs/toolkit'

export const commentReducer = createSlice({
  name: 'comment',
  initialState: {
    comments: null
  },
  reducers: {
    setComments: (state, action) => {
      state.comments = action.payload
    },
  }
})

export const { setComments } = commentReducer.actions

export default commentReducer.reducer