import { Outlet, Link } from "react-router-dom";

import getData from "../../db/db";
import './Home.css';

const citiesData = getData().travelOptions;
const allCities = [...citiesData.asia, ...citiesData.africa, ...citiesData.europe, ...citiesData.america, ...citiesData.oceania];

function Home({handleSelectChange, selectedValue}) {

    const data = allCities.map(country => {
        const {id, flightId, city} = country;
        return (
            <option key={id} value={[flightId, city]}>{city}</option>
        )
    })

    return (
        <div className="page__content">
            <div className="page__inner">
                <h1 className="main__title">Welcome to <span>TRAVELEVER!</span></h1>
                <h2 className="main__subtitle">The amazing app for city break lovers</h2>

                <h3 className="journey">Choose the destination of your next journey</h3>

                <label htmlFor="cities" className="cities__label">Your location:</label>

                <Select selectedValue={selectedValue} onSelectChange={handleSelectChange} data={data}/>
                
                <Link to='/start'>
                    <button className="main__btn">Get started!</button>
                </Link>
            </div>

            <Outlet />
        </div>
    )
}

function Select({selectedValue, data, onSelectChange}) {
    return <select name="location" id="cities" value={selectedValue} onChange={onSelectChange}>{data}</select>
}

export default Home;
export {Select};

