import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";


const Search = ({ searchRef }) => {

    const navigate = useNavigate();


    const [searchText, setSearchText] = useState('');
    const { searchStatus } = useSelector(state => state.site);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchText}`);
        setSearchText('');
    }



    return (
        <div className={`search ${searchStatus ? 'active' : ''}`} ref={searchRef} onClick={(e) => {
            e.stopPropagation();
        }}>
            <form className="search__form" onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    className='search__input'
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Search