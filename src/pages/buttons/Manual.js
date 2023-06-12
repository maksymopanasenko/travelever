import { useState } from 'react';

import Search from "./components/search/Search";

import Aside from "./components/aside/Aside";
import Main from "./components/main/Main";

import './Manual.css';

import france from '../../resources/img/fr.jpg';
import hungary from '../../resources/img/hu.jpg';
import germany from '../../resources/img/de.jpg';
import italy from '../../resources/img/it.jpg';
import greece from '../../resources/img/athens.jpg';

const mainData = [
    {img: france, city: "Paris", point: 9, country: "France", id: 1},
    {img: hungary, city: "Budapest", point: 6, country: "Hungary", id: 2},
    {img: italy, city: "Rome", point: 8, country: "Italy", id: 3},
    {img: germany, city: "Berlin", point: 7, country: "Germany", id: 4},
    {img: greece, city: "Athens", point: 8, country: "Greece", id: 5}
];

function Manual() {
    const [data, setData] = useState(mainData);

    function onSortByPopularity(target) {
        const copyData = data.slice(0);

        if (target.nodeName !== 'INPUT') return;

        if (target.dataset.popular == 'increase') {
            copyData.sort((a, b) => b.point - a.point);
            setData(copyData);
        } else {
            copyData.sort((a, b) => a.point - b.point);
            setData(copyData);
        }
    }


    return  (
        <main className="manual">
            <section>
                <Search />
                <div className="manual__window">
                    <Aside onSort={onSortByPopularity}/>
                    <Main data={data}/>
                </div>
            </section>
        </main>
    )
}

export default Manual;