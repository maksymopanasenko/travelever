import { useState, useEffect } from 'react';
import './FilterPanel.css';


const FilterContinent = () => {
    const [allChecked, setAllChecked] = useState(false);
    const [europeChecked, setEuropeChecked] = useState(false);
    const [asiaChecked, setAsiaChecked] = useState(false);
    const [africaChecked, setAfricaChecked] = useState(false);
    const [americaChecked, setAmericaChecked] = useState(false);
    const [oceaniaChecked, setOceaniaChecked] = useState(false);
  
    useEffect(() => {
      if (
        europeChecked &&
        asiaChecked &&
        africaChecked &&
        americaChecked &&
        oceaniaChecked
      ) {
        setAllChecked(true);
      }
    }, [europeChecked, asiaChecked, africaChecked, americaChecked, oceaniaChecked]);
  
    const handleAllChange = (e) => {
      const { checked } = e.target;
      setAllChecked(checked);
      setEuropeChecked(checked);
      setAsiaChecked(checked);
      setAfricaChecked(checked);
      setAmericaChecked(checked);
      setOceaniaChecked(checked);
    };
  
    const handleCountryChange = (e) => {
      const { name, checked } = e.target;
      switch (name) {
        case 'europe':
          setEuropeChecked(checked);
          if (!checked) {
            setAllChecked(false);
          }
          break;
        case 'asia':
          setAsiaChecked(checked);
          if (!checked) {
            setAllChecked(false);
          }
          break;
        case 'africa':
          setAfricaChecked(checked);
          if (!checked) {
            setAllChecked(false);
          }
          break;
        case 'america':
          setAmericaChecked(checked);
          if (!checked) {
            setAllChecked(false);
          }
          break;
        case 'oceania':
          setOceaniaChecked(checked);
          if (!checked) {
            setAllChecked(false);
          }
          break;
        default:
          break;
      }
    };


    return (
        <div className="filter__continent">
            <h3 className="filter__title">Continents</h3>
            <div className="filter__options">
                <label htmlFor="all">
                    <input type="checkbox" name='all' id="all" checked={allChecked} onChange={handleAllChange}/>
                    All
                </label>

                <label htmlFor="europe">
                    <input type="checkbox" name='europe' id="europe" checked={europeChecked} onChange={handleCountryChange}/>
                    Europe
                </label>
                
                <label htmlFor="asia">
                    <input type="checkbox" name='asia' id="asia" checked={asiaChecked} onChange={handleCountryChange}/>
                    Asia
                </label>

                <label htmlFor="africa">
                    <input type="checkbox" name='africa' id="africa" checked={africaChecked} onChange={handleCountryChange}/>
                    Africa
                </label>
                
                <label htmlFor="america">
                    <input type="checkbox" name='america' id="america" checked={americaChecked} onChange={handleCountryChange}/>
                    North & South America
                </label>
                
                <label htmlFor="oceania">
                    <input type="checkbox" name='oceania' id="oceania" checked={oceaniaChecked} onChange={handleCountryChange}/>
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