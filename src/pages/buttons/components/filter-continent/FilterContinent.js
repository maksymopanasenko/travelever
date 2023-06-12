import './FilterContinent.css';


const FilterContinent = () => {
    return (
        <div className="filter__continent">
            <h3 className="filter__title">Continents</h3>
            <div className="filter__options">
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

const FilterByPopularity = ({onSort}) => {
    return (
        <div className="filter__popular">
                <h3 className="filter__title">Popularity</h3>
                <div className="filter__options" onChange={(e) => onSort(e.target)}>
                    <label htmlFor="increase">
                        <input type="radio" name='popular' id="increase" data-popular='increase'/>
                        Most popular
                    </label>
                    <label htmlFor="decrease">
                        <input type="radio" name='popular' id="decrease" data-popular='decrease'/>
                        Least popular
                    </label>
                </div>
        </div>
    )
}

export {FilterContinent, FilterByPopularity};