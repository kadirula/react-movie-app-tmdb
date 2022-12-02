import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ToolBar from '../components/ToolBar'
import { setDarkMode } from '../redux/reducers/siteReducer'

const Layout = () => {

    const { darkMode } = useSelector(state => state.site);

    return (
        <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
            <ToolBar />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout