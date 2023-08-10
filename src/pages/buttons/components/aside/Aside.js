import { FilterContinent, FilterByPopularity } from '../filter-panel/FilterPanel';

import '../StyleBlocks.css';

const Aside = ({selectedValue, onSort, handleAllChange, handleCountryChange, status}) => {
    const cityName = selectedValue.split(',').slice(1);
    return (
        <div className="aside">
            <div className="aside__panel">
                <FilterContinent handleAllChange={handleAllChange} handleCountryChange={handleCountryChange} status={status}/>
                <FilterByPopularity onSort={onSort}/>
            </div>
            
            <div className="aside__location">
                <p className='aside__text'>Your location: <span className='aside__city'>{cityName}</span></p>
            </div>
        </div>
    )
}

export default Aside;