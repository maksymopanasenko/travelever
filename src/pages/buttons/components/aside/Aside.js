import { FilterContinent, FilterByPopularity } from '../filter-panel/FilterPanel';

import '../StyleBlocks.css';

const Aside = ({onSort}) => {
    return (
        <div className="aside">
            <FilterContinent/>
            <FilterByPopularity onSort={onSort}/>
        </div>
    )
}

export default Aside;