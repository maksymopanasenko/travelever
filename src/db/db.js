import france from '../resources/img/fr.jpg';
import hungary from '../resources/img/hu.jpg';
import germany from '../resources/img/de.jpg';
import italy from '../resources/img/it.jpg';
import greece from '../resources/img/athens.jpg';
import india from '../resources/img/agra.jpg';
import bangkok from '../resources/img/bangkok.jpg';
import dubai from '../resources/img/dubai.jpg';

export default function getData() {
    return [
        {img: france, city: "Paris", point: 10, country: "France", id: 1},
        {img: hungary, city: "Budapest", point: 6, country: "Hungary", id: 2},
        {img: italy, city: "Rome", point: 9, country: "Italy", id: 3},
        {img: bangkok, city: "Bangkok", point: 10, country: "Thailand", id: 4},
        {img: germany, city: "Berlin", point: 7, country: "Germany", id: 5},
        {img: greece, city: "Athens", point: 8, country: "Greece", id: 6},
        {img: dubai, city: "Dubai", point: 9, country: "UAE", id: 7},
        {img: india, city: "Agra", point: 8, country: "India", id: 8}
    ];
}