import './FilterPanel.css';


const FilterContinent = ({handleAllChange, handleCountryChange, status}) => {

    return (
        <div className="filter__continent">
            <h3 className="filter__title">Continents</h3>
            <div className="filter__options">
                <label htmlFor="all">
                    <input className="filter__input" type="checkbox" name='all' id="all" checked={status[0]} onChange={handleAllChange}/>
                    All
                </label>

                <label htmlFor="europe">
                    <input className="filter__input" type="checkbox" name='europe' id="europe" checked={status[1]} onChange={handleCountryChange}/>
                    Europe
                </label>
                
                <label htmlFor="asia">
                    <input className="filter__input" type="checkbox" name='asia' id="asia" checked={status[2]} onChange={handleCountryChange}/>
                    Asia
                </label>

                <label htmlFor="africa">
                    <input className="filter__input" type="checkbox" name='africa' id="africa" checked={status[3]} onChange={handleCountryChange}/>
                    Africa
                </label>
                
                <label htmlFor="america">
                    <input className="filter__input" type="checkbox" name='america' id="america" checked={status[4]} onChange={handleCountryChange}/>
                    North & South America
                </label>
                
                <label htmlFor="oceania">
                    <input className="filter__input" type="checkbox" name='oceania' id="oceania" checked={status[5]} onChange={handleCountryChange}/>
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
                        <input className="filter__input" type="radio" name='popular' id="increase" data-popular='increase'/>
                        Most popular
                    </label>
                    <label htmlFor="decrease">
                        <input className="filter__input" type="radio" name='popular' id="decrease" data-popular='decrease'/>
                        Least popular
                    </label>
                </div>
        </div>
    )
}

export {FilterContinent, FilterByPopularity};