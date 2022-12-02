import { createSlice } from '@reduxjs/toolkit'

export const siteReducer = createSlice({
  name: 'site',
  initialState: {
    searchStatus: false,
    darkMode: localStorage.getItem('theme-mode') ? JSON.parse(localStorage.getItem('theme-mode')) : false
  },
  reducers: {
    setSearchStatus: (state, action) => {
      state.searchStatus = action.payload
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
      localStorage.setItem('theme-mode',  JSON.stringify(action.payload));
    }
  }
})

export const { setSearchStatus, setDarkMode } = siteReducer.actions

export default siteReducer.reducer