import { useState } from 'react';

import favorite from '../../../../resources/icons/favorite.png';
import search from '../../../../resources/icons/search.png';
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
                <div className="manual__search-box">
                    <div className="search__box">
                        <img src={search} alt="search" className='search__img'/>
                    </div>
                    <input type="text"
                        id='search'
                        placeholder='Start to type a city...'
                        value={term}
                        onChange={onUpdateSearch}/>
                </div>
            </div>
            <button className="manual__favorite">
                <img src={favorite} alt="star" />
                Favorites
            </button>
        </div>
    )
}

export default Search;