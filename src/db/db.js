import france from '../resources/img/fr.jpg';
import hungary from '../resources/img/hu.jpg';
import germany from '../resources/img/de.jpg';
import italy from '../resources/img/it.jpg';
import greece from '../resources/img/athens.jpg';
import india from '../resources/img/agra.jpg';
import bangkok from '../resources/img/bangkok.jpg';
import dubai from '../resources/img/dubai.jpg';
import marrakesh from '../resources/img/mr.jpg';
import nyc from '../resources/img/nyc.jpg';
import sydney from '../resources/img/sydney.jpg';
import cairo from '../resources/img/cairo.jpg';
import london from '../resources/img/london.jpg';
import istanbul from '../resources/img/istanbul.jpg';
import prague from '../resources/img/prague.jpg';
import barcelona from '../resources/img/barcelona.jpg';
import vienna from '../resources/img/vienna.jpg';
import krakow from '../resources/img/krakow.jpg';
import singapore from '../resources/img/singapore.jpg';
import tokyo from '../resources/img/tokyo.jpg';
import mumbai from '../resources/img/mumbai.jpg';
import seoul from '../resources/img/seoul.jpg';

export default function getData() {
    return {
            europe: [
                {img: france, city: "Paris", point: 10, country: "France", favorite: false, id: '1eu'},
                {img: hungary, city: "Budapest", point: 5, country: "Hungary", favorite: false, id: '2eu'},
                {img: italy, city: "Rome", point: 9, country: "Italy", favorite: false, id: '3eu'},
                {img: germany, city: "Berlin", point: 6, country: "Germany", favorite: false, id: '4eu'},
                {img: greece, city: "Athens", point: 8, country: "Greece", favorite: false, id: '5eu'},
                {img: london, city: "London", point: 10, country: "Great Britain", favorite: false, id: '6eu'},
                {img: istanbul, city: "Istanbul", point: 9, country: "Turkey", favorite: false, id: '7eu'},
                {img: prague, city: "Prague", point: 8, country: "Czech Republic", favorite: false, id: '8eu'},
                {img: barcelona, city: "Barcelona", point: 7, country: "Spain", favorite: false, id: '9eu'},
                {img: vienna, city: "Vienna", point: 6, country: "Austria", favorite: false, id: '10eu'},
                {img: krakow, city: "Krakow", point: 3, country: "Poland", favorite: false, id: '11eu'},
            ],
            asia: [
                {img: bangkok, city: "Bangkok", point: 10, country: "Thailand", favorite: false, id: '1as'},
                {img: dubai, city: "Dubai", point: 10, country: "UAE", favorite: false, id: '2as'},
                {img: india, city: "Agra", point: 8, country: "India", favorite: false, id: '3as'},
                {img: singapore, city: "Singapore", point: 9, country: "Singapore", favorite: false, id: '4as'},
                {img: tokyo, city: "Tokyo", point: 8, country: "Japan", favorite: false, id: '5as'},
                {img: mumbai, city: "Mumbai", point: 6, country: "India", favorite: false, id: '6as'},
                {img: seoul, city: "Seoul", point: 7, country: "South Korea", favorite: false, id: '7as'},
            ],
            africa: [
                {img: marrakesh, city: "Marrakesh", point: 8, country: "Marocco", favorite: false, id: '1af'},
                {img: cairo, city: "Cairo", point: 8, country: "Egipt", favorite: false, id: '2af'},
            ],
            america: [
                {img: nyc, city: "New York", point: 10, country: "USA", favorite: false, id: '1am'},
            ],
            oceania: [
                {img: sydney, city: "Sydney", point: 7, country: "Australia", favorite: false, id: '1oc'}
            ],
        }
}