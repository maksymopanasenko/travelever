import Search from "./components/Search";
import Aside from "./components/aside/Aside";
import Main from "./components/main/Main";

import './Manual.css';

function Manual() {
    return  (
        <div className="manual">
            <Search />
            <div className="manual__window">
                <Aside/>
                <Main/>
            </div>
        </div>
    )
}

export default Manual;