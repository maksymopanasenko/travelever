import { Outlet, Link } from "react-router-dom";

import './Home.css';

function Home({handleSelectChange, selectedValue}) {

    return (
        <div className="page__content">
            <div className="page__inner">
                <h1 className="main__title">Welcome to <span>TRAVELEVER!</span></h1>
                <h2 className="main__subtitle">The amazing app for city break lovers</h2>

                <h3 className="journey">Choose the destination of your next journey</h3>

                <label htmlFor="cities" className="cities__label">Your location:</label>
                <select name="location" id="cities" value={selectedValue} onChange={handleSelectChange} required>
                    <option value="krak">Krakow</option>
                    <option value="pari">Paris</option>
                    <option value="bud">Budapest</option>
                    <option value="ber">Berlin</option>
                </select>
                
                <Link to='/start'>
                    <button className="main__btn">Get started!</button>
                </Link>
            </div>

            <Outlet />
        </div>
    )
}

export default Home;