import { useState, useEffect } from 'react';

import Search from "./components/search/Search";

import Aside from "./components/aside/Aside";
import Main from "./components/main/Main";

import getData from '../../db/db';

import './Manual.css';


function Manual() {
    const [data, setData] = useState([]);
    const [fullData, setFullData] = useState([]);
    const [term, setTerm] = useState('');
    const [target, setTarget] = useState(null);
    const [chunk, setChunk] = useState(10);
    
    const [allChecked, setAllChecked] = useState(true);
    const [europeChecked, setEuropeChecked] = useState(true);
    const [asiaChecked, setAsiaChecked] = useState(true);
    const [africaChecked, setAfricaChecked] = useState(true);
    const [americaChecked, setAmericaChecked] = useState(true);
    const [oceaniaChecked, setOceaniaChecked] = useState(true);

    const countiesData = getData();

    useEffect(() => {
        setChunk(10);
    }, [target]);

    useEffect(() => {
        let selectedCountries = [];

        if (asiaChecked) {
            selectedCountries = selectedCountries.concat(countiesData.asia);
        }
    
        if (europeChecked) {
            selectedCountries = selectedCountries.concat(countiesData.europe);
        }

        if (africaChecked) {
            selectedCountries = selectedCountries.concat(countiesData.africa);
        }

        if (americaChecked) {
            selectedCountries = selectedCountries.concat(countiesData.america);
        }

        if (oceaniaChecked) {
            selectedCountries = selectedCountries.concat(countiesData.oceania);
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

        setChunk(10);
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

        return fullData.filter(item => {

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

    const searchedData = searchCity(data, term);

    return  (
        <main className="manual">
            <section>
                <Search onSearch={onUpdateSearch}/>
                <div className="manual__window">
                    <Aside onSort={onSortByPopularity} handleAllChange={handleAllChange} handleCountryChange={handleCountryChange} status={[allChecked, europeChecked, asiaChecked, africaChecked, americaChecked, oceaniaChecked]}/>
                    <Main data={searchedData} term={term} fullData={fullData} onUpdateList={onUpdateList}/>
                </div>
            </section>
        </main>
    )
}

export default Manual;