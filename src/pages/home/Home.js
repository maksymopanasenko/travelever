import { Outlet, Link } from "react-router-dom";

import './Home.css';

function Home() {
    return (
        <div className="main__info">
            <h1 className="main__header">Welcome to <span>TRAVELEVER!</span></h1>
            <h2>The amazing app for city break lovers</h2>

            <h3 className="journey">Choose the destination of your next journey</h3>
            
            <div className="btns">
                <Link to="/button1">
                    <button>Manualy</button>
                </Link>

                <Link to="/button2">
                    <button>Random</button>
                </Link>
            </div>

            <Outlet />
        </div>
    )
}

export default Home;