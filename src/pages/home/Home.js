import { Outlet, Link } from "react-router-dom";

import './Home.css';

function Home() {
    return (
        <div className="page__content">
            <h1 className="main__title">Welcome to <span>TRAVELEVER!</span></h1>
            <h2 className="main__subtitle">The amazing app for city break lovers</h2>

            <h3 className="journey">Choose the destination of your next journey</h3>
            
            <Link to="/start">
                <button className="main__btn">Start</button>
            </Link>

            <Outlet />
        </div>
    )
}

export default Home;