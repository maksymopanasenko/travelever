import Search from "./components/search/Search";

import Aside from "./components/aside/Aside";
import Main from "./components/main/Main";

import './Manual.css';

import france from '../../resources/img/fr.jpg';
import germany from '../../resources/img/de.jpg';

function Manual() {
    const data = [
        {img: france, city: "Paris", country: "France", id: 1},
        {img: france, city: "Paris", country: "France", id: 2},
        {img: france, city: "Paris", country: "France", id: 3},
        {img: germany, city: "Bremen", country: "Germany", id: 4}
    ];

    return  (
        <div className="manual">
            <Search />
            <div className="manual__window">
                <Aside/>
                <Main data={data}/>
            </div>
        </div>
    )
}

export default Manual;