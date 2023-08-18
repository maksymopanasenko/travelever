import { useState } from 'react';

import favorite from '../../../../resources/icons/favorite.png';
import search from '../../../../resources/icons/search.png';
import globe from '../../../../resources/icons/globe.png';

import './Search.css';

function Search({onSearch, onShowFavorites, onShowAll}) {
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
            <div className="manual__btns">
                <button className="manual__favorite" onClick={onShowFavorites}>
                    <img src={favorite} alt="star" />
                    Favorites
                </button>
                <button className="manual__favorite" id='all' onClick={onShowAll}>
                    <img src={globe} alt="star" />
                    All
                </button>
            </div>
        </div>
    )
}

export default Search;