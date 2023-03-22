import { Outlet, Link } from "react-router-dom";

import './Home.css';

function Home() {
    return (
        <div className="main__info">
            <h1 className="main__header">Welcome to <span>TRAVELEVER!</span></h1>
            <p>The amazing app for city break lovers</p>

            <div className="journey">Choose the destination of your next journey</div>
            
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