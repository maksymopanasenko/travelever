import { useState } from 'react';
import './Search.css';

function Search({onSearch}) {
    const [term, setTerm] = useState('');

    function onUpdateSearch(e) {
        const termValue = e.target.value;
        setTerm(termValue);
        onSearch(termValue);
    }

    return (
        <div className="manual__search">
            <div className="manual__search-field">
            <label htmlFor="search">Quick search</label>
            <input type="text"
                id='search'
                placeholder='Start to type a city...'
                value={term}
                onChange={onUpdateSearch}/>
            </div>
        </div>
    )
}

export default Search;