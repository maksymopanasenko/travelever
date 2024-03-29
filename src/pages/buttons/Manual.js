import { useState, useEffect } from 'react';

import Search from "./components/search/Search";

import Aside from "./components/aside/Aside";
import Main from "./components/main/Main";
import Overlay from './components/card/Card';

import getData from '../../db/db';

import './Manual.css';

const countriesData = getData().travelOptions;
const allCountries = [...countriesData.asia, ...countriesData.africa, ...countriesData.europe, ...countriesData.america, ...countriesData.oceania];

function Manual({handleSelectChange, selectedValue}) {
    const [data, setData] = useState([]);
    const [fullData, setFullData] = useState([]);
    const [initialData, setInitialData] = useState(allCountries);
    const [term, setTerm] = useState('');
    const [target, setTarget] = useState(null);
    const [chunk, setChunk] = useState(10);
    
    const [allChecked, setAllChecked] = useState(true);
    const [europeChecked, setEuropeChecked] = useState(true);
    const [asiaChecked, setAsiaChecked] = useState(true);
    const [africaChecked, setAfricaChecked] = useState(true);
    const [americaChecked, setAmericaChecked] = useState(true);
    const [oceaniaChecked, setOceaniaChecked] = useState(true);
    const [card, setCard] = useState(null);
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        setChunk(10);
    }, [target]);

    useEffect(() => {
        let selectedCountries = [];

        if (asiaChecked) {
            selectedCountries = selectedCountries.concat(countriesData.asia);
        }
    
        if (europeChecked) {
            selectedCountries = selectedCountries.concat(countriesData.europe);
        }

        if (africaChecked) {
            selectedCountries = selectedCountries.concat(countriesData.africa);
        }

        if (americaChecked) {
            selectedCountries = selectedCountries.concat(countriesData.america);
        }

        if (oceaniaChecked) {
            selectedCountries = selectedCountries.concat(countriesData.oceania);
        }
    
        setData(selectedCountries.slice(0, 5));
        setFullData(selectedCountries);
        setChunk(10);
        if (target !== null) {
            sortSmth(selectedCountries);
        }

        // eslint-disable-next-line
    }, [europeChecked, asiaChecked, africaChecked, americaChecked, oceaniaChecked]);

    useEffect(() => {
        if (!europeChecked || !asiaChecked || !americaChecked || !africaChecked || !oceaniaChecked) {
            setAllChecked(false);
        } else {
            setAllChecked(true);
        }

        setFavorite(false);
        setChunk(10);
    }, [europeChecked, asiaChecked, africaChecked, americaChecked, oceaniaChecked]);

    const newData = allCountries.map(country => {
        const {id, flightId, city} = country;
        return (
            <option key={id} value={[flightId, city]}>{city}</option>
        )
    })
  
    const handleAllChange = (e) => {
        const { checked } = e.target;
        setAllChecked(checked);
        setEuropeChecked(checked);
        setAsiaChecked(checked);
        setAfricaChecked(checked);
        setAmericaChecked(checked);
        setOceaniaChecked(checked);
        setFavorite(false);
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

    function onSortByPopularity(target) {
        setTarget(target);

        if (target.nodeName !== 'INPUT') return;

        if (target.dataset.popular === 'increase') {
            const newArr = fullData.slice(0);
            newArr.sort((a, b) => b.point - a.point);
            setData(newArr.slice(0, 5));
        } else {
            const newArr = fullData.slice(0);
            newArr.sort((a, b) => a.point - b.point);
            setData(newArr.slice(0, 5));
        }
    }

    function sortSmth(arr) {
        
        if (target.dataset.popular === 'increase') {
            const newArr = arr.slice(0);
            newArr.sort((a, b) => b.point - a.point);
            setData(newArr.slice(0, chunk));
        } else {
            const newArr = arr.slice(0);
            newArr.sort((a, b) => a.point - b.point);
            setData(newArr.slice(0, chunk));
        }
    }

    function onUpdateSearch(newTerm) {
        setTerm(newTerm);
    }

    function searchCity(items, term) {
        if (term.length === 0) return items;

        const processedData = favorite ? data : fullData;
        
        const englishLettersRegex = /^[A-Za-z]+$/;

        console.log(englishLettersRegex.test(term));
        if (!englishLettersRegex.test(term)) {
            return items;
        }

        return processedData.filter(item => {

            let matchPattern = new RegExp(`^${term}`, 'gi');

            return item.city.match(matchPattern);
        });
    }

    function onUpdateList() {
        setChunk(c => c + 5);
        if (target !== null) {
            sortSmth(fullData);
        } else {
            setData(fullData.slice(0, chunk));
        }
    }

    function onClose() {
        setCard(null);
    }

    function onShowCard(id) {
        const choosedCard = initialData.find(item => item.id === id);
        setCard(choosedCard);
    } 

    const onSwitchFavorite = (key) => {

        const newFullData = initialData.map(item => {
            if (item.id === key) {
                item.favorite = !item.favorite;
                return item;
            } else {
                return item;
            }
        });

        setInitialData(newFullData);
    }

    function onShowFavorites(e) {
        const favorites = initialData.filter(item => item.favorite);
        setFavorite(true);
        setData(favorites);
        
        if (e.target.tagName === 'BUTTON') {
            e.target.nextElementSibling.style.cssText = 'width: 100%; overflow: visible'
            e.target.style.cssText = 'width: 0; overflow: hidden'
        } else {
            e.target.parentElement.nextElementSibling.style.cssText = 'width: 100%; overflow: visible'
            e.target.parentElement.style.cssText = 'width: 0; overflow: hidden'
        }
    }

    function onShowAll(e) {
        setFavorite(false);
        setData(fullData.slice(0, 5));
        if (e.target.tagName === 'BUTTON') {
            e.target.previousElementSibling.style.cssText = 'width: 100%; overflow: visible'
            e.target.style.cssText = 'width: 0; overflow: hidden'
        } else {
            e.target.parentElement.previousElementSibling.style.cssText = 'width: 100%; overflow: visible'
            e.target.parentElement.style.cssText = 'width: 0; overflow: hidden'
        }        
    }

    const searchedData = searchCity(data, term);

    return  (
        <main className="manual">
            <Overlay cardData={card} onClose={onClose} selectedValue={selectedValue}/>
            <section className='manual__content'>
                <Search onSearch={onUpdateSearch} onShowFavorites={onShowFavorites} onShowAll={onShowAll}/>
                <div className="manual__window">
                    <Aside onSort={onSortByPopularity} handleAllChange={handleAllChange} handleCountryChange={handleCountryChange}  handleSelectChange={handleSelectChange} data={newData} favorite={favorite} selectedValue={selectedValue} status={[allChecked, europeChecked, asiaChecked, africaChecked, americaChecked, oceaniaChecked]}/>
                    <Main data={searchedData} favorite={favorite} term={term} fullData={fullData} onUpdateList={onUpdateList} onSwitchFavorite={onSwitchFavorite} onShowCard={onShowCard}/>
                </div>
            </section>
        </main>
    )
}

export default Manual;