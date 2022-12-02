import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosCloudyNight } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { setSearchStatus, setDarkMode } from "../redux/reducers/siteReducer";

const ToolBar = () => {

    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('theme-mode')))
    const searchRef = useRef(null);

    const { searchStatus } = useSelector(state => state.site);
    const dispatch = useDispatch();

    const handleToggleSearch = () => {
        dispatch(setSearchStatus(!searchStatus))
    }

    const handleThemeMode = () => {
        setIsDark(!isDark)
        dispatch(setDarkMode(!isDark));
    }

    useEffect(() => {

        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                dispatch(setSearchStatus(false));
            }
        }

        document.addEventListener("click", handleClickOutside, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };

    }, [])

    return (
        <div className='toolbar'>
            <div className="toolbar__item">
                {
                    searchStatus ? <AiOutlineClose className="toolbar__icon" onClick={handleToggleSearch} /> : <FiSearch className="toolbar__icon" onClick={handleToggleSearch} />
                }
                <Search searchRef={searchRef} />
            </div>
            <div className="toolbar__item">
                {
                    isDark ?
                        <MdLightMode onClick={handleThemeMode} />
                        :
                        <IoIosCloudyNight onClick={handleThemeMode} />
                }
            </div>
        </div>
    )
}

export default ToolBar