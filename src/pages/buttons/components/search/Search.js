import './Search.css';

function Search() {
    return (
        <div className="manual__search">
            <div className="manual__search-field">
            <label htmlFor="search">Quick search</label>
            <input type="text" id='search' placeholder='Start to type a city...'/>
            </div>
        </div>
    )
}

export default Search;