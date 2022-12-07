import { createSlice } from '@reduxjs/toolkit'

export const siteReducer = createSlice({
  name: 'site',
  initialState: {
    searchStatus: false,
    darkMode: localStorage.getItem('theme-mode') ? JSON.parse(localStorage.getItem('theme-mode')) : false,
    error: null
  },
  reducers: {
    setSearchStatus: (state, action) => {
      state.searchStatus = action.payload
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
      localStorage.setItem('theme-mode',  JSON.stringify(action.payload));
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const { setSearchStatus, setDarkMode, setError } = siteReducer.actions

export default siteReducer.reducer