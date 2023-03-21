import { Outlet, Link } from "react-router-dom";

import './Home.css';

function Home() {
    return (
        <div>
            <h1>Welcome to TRAVELEVER!</h1>
            
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