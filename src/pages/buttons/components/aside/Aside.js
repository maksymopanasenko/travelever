import { FilterContinent, FilterByPopularity } from '../filter-panel/FilterPanel';
import {Select} from '../../../home/Home';

import './Aside.css';
import { useState } from 'react';

const Aside = ({selectedValue, data, handleSelectChange, onSort, handleAllChange, handleCountryChange, status}) => {
    const [stat, setStat] = useState(false);
    const cityName = selectedValue.split(',').slice(1);
    
    function changeToTrue() {
        setStat(true);
    }

    function changeToFalse() {
        setStat(false);
    }

    function multiChange(e) {
        handleSelectChange(e);
        changeToFalse();
    }

    return (
        <div className="aside">
            <div className="aside__panel">
                <FilterContinent handleAllChange={handleAllChange} handleCountryChange={handleCountryChange} status={status}/>
                <FilterByPopularity onSort={onSort}/>
            </div>
            
            <div className="aside__location">
                    {
                        stat ?
                        <Select onSelectChange={multiChange} data={data} selectedValue={selectedValue}/> :
                        <CityName cityName={cityName} changeToTrue={changeToTrue}/>
                    }
            </div>
        </div>
    )
}

const CityName = ({cityName, changeToTrue}) => {
    return (
        <>
            <span className='aside__city'>{cityName}</span>
            <button className="aside__btn" onClick={changeToTrue}>Change location</button>
        </>
    )
}

export default Aside;