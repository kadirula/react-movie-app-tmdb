import { createSlice } from '@reduxjs/toolkit'

export const siteReducer = createSlice({
  name: 'site',
  initialState: {
    searchStatus: false
  },
  reducers: {
    setSearchStatus: (state, action) => {
      state.searchStatus = action.payload
    }
  }
})

export const { setSearchStatus } = siteReducer.actions

export default siteReducer.reducer