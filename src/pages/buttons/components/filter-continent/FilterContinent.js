import './FilterContinent.css';

const FilterContinent = () => {
    return (
        <div className="filter__continent">
            <h3>Continents</h3>
            <div className="filter__continents__variants">
                <input type="checkbox" id="continent1"/>
                <label htmlFor="continent1">Europe</label>
                <input type="checkbox" id="continent3"/>
                <label htmlFor="continent3">Asia</label>
                <input type="checkbox" id="continent4"/>
                <label htmlFor="continent4">Africa</label>
                <input type="checkbox" id="continent2"/>
                <label htmlFor="continent2">North and South America</label>
                <input type="checkbox" id="continent5"/>
                <label htmlFor="continent5">Australia and Oceania</label>
            </div>
        </div>
    )
}

export default FilterContinent;