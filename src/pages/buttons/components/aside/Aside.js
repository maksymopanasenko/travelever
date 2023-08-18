import { FilterContinent, FilterByPopularity } from '../filter-panel/FilterPanel';
import {Select} from '../../../home/Home';

import './Aside.css';
import { useState } from 'react';

const Aside = ({selectedValue, data, favorite, handleSelectChange, onSort, handleAllChange, handleCountryChange, status}) => {
    const [stat, setStat] = useState(false);
    const cityName = selectedValue.split(',').slice(1);
    
    function toggleState() {
        setStat(s => !s);
    }

    function multiChange(e) {
        handleSelectChange(e);
        toggleState();
    }

    return (
        <div className="aside">
            {
                favorite ?
                null :
                <div className="aside__panel">
                    <FilterContinent handleAllChange={handleAllChange} handleCountryChange={handleCountryChange} status={status}/>        
                    <FilterByPopularity onSort={onSort}/>
                </div>
            }

            
            <div className="aside__location">
                    {
                        stat ?
                        <Select onSelectChange={multiChange} data={data} selectedValue={selectedValue}/> :
                        <CityName cityName={cityName} toggleState={toggleState}/>
                    }
            </div>
        </div>
    )
}

const CityName = ({cityName, toggleState}) => {
    return (
        <>
            <span className='aside__city'>{cityName}</span>
            <button className="aside__btn" onClick={toggleState}>Change location</button>
        </>
    )
}

export default Aside;