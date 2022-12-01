import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosCloudyNight } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setSearchStatus } from "../redux/reducers/siteReducer";

const ToolBar = () => {

    const { searchStatus } = useSelector(state => state.site);
    const dispatch = useDispatch();

    const handleToggleSearch = () => {
        dispatch(setSearchStatus(!searchStatus));
    }

    const [isDark, setIsDark] = useState(false)
    return (
        <div className='toolbar'>
            <div className="toolbar__item" onClick={handleToggleSearch}>
                <FiSearch />
            </div>
            <div className="toolbar__item">
                {
                    isDark ?
                        <MdLightMode onClick={() => setIsDark(!isDark)} />
                        :
                        <IoIosCloudyNight onClick={() => setIsDark(!isDark)} />
                }
            </div>
        </div>
    )
}

export default ToolBar