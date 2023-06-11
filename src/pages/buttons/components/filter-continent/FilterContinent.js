import './FilterContinent.css';

const FilterContinent = () => {
    return (
        <div className="filter__continent">
            <h3>Continents</h3>
            <div className="filter__continents__variants">
                
                <label htmlFor="all">
                    <input type="checkbox" name='all' id="all"/>
                    All
                </label>

                <label htmlFor="europe">
                    <input type="checkbox" name='europe' id="europe"/>
                    Europe
                </label>
                
                <label htmlFor="asia">
                    <input type="checkbox" name='asia' id="asia"/>
                    Asia
                </label>

                <label htmlFor="africa">
                    <input type="checkbox" name='africa' id="africa"/>
                    Africa
                </label>
                
                <label htmlFor="america">
                    <input type="checkbox" name='america' id="america"/>
                    North & South America
                </label>
                
                <label htmlFor="oceania">
                    <input type="checkbox" name='oceania' id="oceania"/>
                    Australia & Oceania
                </label>
            </div>
        </div>
    )
}

export default FilterContinent;