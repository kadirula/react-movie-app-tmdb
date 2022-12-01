import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { setSearchStatus } from "../redux/reducers/siteReducer";

const Search = () => {

    const { searchStatus } = useSelector(state => state.site);

    const dispatch = useDispatch();

    const handleToggleSearch = () => {
        dispatch(setSearchStatus(!searchStatus));
    }


    return (
        <div className={`search ${searchStatus && 'active'}`}>

            <div className="search__form">
                <input type="text" className='search__input' placeholder="Search..." />
                <button className='search__btn'>
                    <FiSearch />
                </button>
            </div>
            <div className="search__close" onClick={handleToggleSearch}>
                <AiOutlineClose />
            </div>
        </div>
    )
}

export default Search