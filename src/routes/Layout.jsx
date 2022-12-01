import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Search from '../components/Search'
import ToolBar from '../components/ToolBar'

const Layout = () => {
    return (
        <>
            <Search />
            <ToolBar />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout