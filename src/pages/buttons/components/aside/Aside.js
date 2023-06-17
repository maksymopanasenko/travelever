import { FilterContinent, FilterByPopularity } from '../filter-panel/FilterPanel';

import '../StyleBlocks.css';

const Aside = ({onSort,  handleAllChange, handleCountryChange, status}) => {
    return (
        <div className="aside">
            <FilterContinent handleAllChange={handleAllChange} handleCountryChange={handleCountryChange} status={status}/>
            <FilterByPopularity onSort={onSort}/>
        </div>
    )
}

export default Aside;