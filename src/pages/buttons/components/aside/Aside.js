import { FilterContinent, FilterByPopularity } from '../filter-continent/FilterContinent';

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