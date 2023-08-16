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
            travelOptions: {
                europe: [
                    {img: france, city: "Paris", point: 10, country: "France", characteristics: {price: 3, safety: 3, attraction: 3}, favorite: false, flightId: 'pari', id: '1eu'},
                    {img: hungary, city: "Budapest", point: 5, country: "Hungary", characteristics: {price: 3, safety: 3, attraction: 1}, favorite: false, flightId: 'bud', id: '2eu'},
                    {img: italy, city: "Rome", point: 9, country: "Italy", characteristics: {price: 3, safety: 3, attraction: 2}, favorite: false, flightId: 'rom', id: '3eu'},
                    {img: germany, city: "Berlin", point: 6, country: "Germany", characteristics: {price: 3, safety: 3, attraction: 2}, favorite: false, flightId: 'ber', id: '4eu'},
                    {img: greece, city: "Athens", point: 8, country: "Greece", characteristics: {price: 3, safety: 2, attraction: 3}, favorite: false, flightId: 'ath', id: '5eu'},
                    {img: london, city: "London", point: 10, country: "Great Britain", characteristics: {price: 3, safety: 3, attraction: 3}, favorite: false, flightId: 'lon', id: '6eu'},
                    {img: istanbul, city: "Istanbul", point: 9, country: "Turkey", characteristics: {price: 2, safety: 2, attraction: 2}, favorite: false, flightId: 'ist', id: '7eu'},
                    {img: prague, city: "Prague", point: 8, country: "Czech Republic", characteristics: {price: 2, safety: 3, attraction: 2}, favorite: false, flightId: 'prag', id: '8eu'},
                    {img: barcelona, city: "Barcelona", point: 7, country: "Spain", characteristics: {price: 3, safety: 2, attraction: 3}, favorite: false, flightId: 'barc', id: '9eu'},
                    {img: vienna, city: "Vienna", point: 6, country: "Austria", characteristics: {price: 3, safety: 3, attraction: 3}, favorite: false, flightId: 'vie', id: '10eu'},
                    {img: krakow, city: "Krakow", point: 3, country: "Poland", characteristics: {price: 2, safety: 3, attraction: 2}, favorite: false, flightId: 'krak', id: '11eu'},
                ],
                asia: [
                    {img: bangkok, city: "Bangkok", point: 10, country: "Thailand", characteristics: {price: 1, safety: 2, attraction: 3}, favorite: false, flightId: 'bkkt', id: '1as'},
                    {img: india, city: "Agra", point: 8, country: "India", characteristics: {price: 1, safety: 1, attraction: 2}, favorite: false, flightId: 'agr', id: '3as'},
                    {img: singapore, city: "Singapore", point: 9, country: "Singapore", characteristics: {price: 3, safety: 3, attraction: 2}, favorite: false, flightId: 'sin', id: '4as'},
                    {img: dubai, city: "Dubai", point: 10, country: "UAE", characteristics: {price: 3, safety: 3, attraction: 2}, favorite: false, flightId: 'dxba', id: '2as'},
                    {img: tokyo, city: "Tokyo", point: 8, country: "Japan", characteristics: {price: 3, safety: 3, attraction: 2}, favorite: false, flightId: 'tyoa', id: '5as'},
                    {img: mumbai, city: "Mumbai", point: 6, country: "India", characteristics: {price: 1, safety: 1, attraction: 2}, favorite: false, flightId: 'bom', id: '6as'},
                    {img: seoul, city: "Seoul", point: 7, country: "South Korea", characteristics: {price: 2, safety: 3, attraction: 2}, favorite: false, flightId: 'sela', id: '7as'},
                ],
                africa: [
                    {img: marrakesh, city: "Marrakesh", point: 8, country: "Marocco", characteristics: {price: 1, safety: 1, attraction: 1}, favorite: false, flightId: 'rak', id: '1af'},
                    {img: cairo, city: "Cairo", point: 8, country: "Egipt", characteristics: {price: 1, safety: 1, attraction: 2}, favorite: false, flightId: 'cai', id: '2af'},
                ],
                america: [
                    {img: nyc, city: "New York", point: 10, country: "USA", characteristics: {price: 3, safety: 3, attraction: 3}, favorite: false, flightId: 'nyca', id: '1am'},
                ],
                oceania: [
                    {img: sydney, city: "Sydney", point: 7, country: "Australia", characteristics: {price: 3, safety: 3, attraction: 1}, favorite: false, flightId: 'syd', id: '1oc'}
                ],
            },
            faq: [
                {id: 1, visibility: false, title: 'What should I pack for my trip?', text: "Packing depends on your destination and the nature of your travel. However, some essentials include clothing suitable for the weather, comfortable footwear, toiletries, travel documents (passport, visa, tickets), electronics (chargers, adapters), a first aid kit, and any specialized items you might need (hiking gear, swimwear, etc.). It's wise to create a packing checklist tailored to your trip."},
                {id: 2, visibility: false, title: 'How do I find the best flight deals?', text: "To find the best flight deals, consider using search engines and travel websites that aggregate fares from various airlines. Be flexible with your travel dates, use fare comparison tools, set fare alerts, and consider booking flights well in advance. Additionally, flying on weekdays or during off-peak seasons can often result in better prices."},
                {id: 3, visibility: false, title: "What's the best way to stay connected while traveling internationally?", text: "Options include getting a local SIM card, using international roaming plans from your home provider, or relying on portable Wi-Fi devices. Research your destination's connectivity options and choose the one that suits your communication needs and budget."},
                {id: 4, visibility: false, title: "How can I stay safe while traveling?", text: "Prioritize your safety by researching the destination, understanding local customs and laws, and staying aware of your surroundings. Keep copies of important documents, avoid displaying valuables, use secure transportation, and be cautious when sharing personal information. Consider investing in travel insurance to cover unexpected events."},
                {id: 5, visibility: false, title: "How do I manage currency exchange and payments abroad?", text: "Notify your bank about your travel plans to avoid potential card blocks. Use local ATMs for currency withdrawal to get competitive exchange rates. Carry a mix of payment methods, including cash, credit/debit cards, and a prepaid travel card. Research local tipping customs to ensure you're adhering to local norms."},
                {id: 6, visibility: false, title: "What's the best way to immerse myself in local culture?", text: "Engage with locals by learning a few basic phrases in the local language, participating in local activities, and trying authentic cuisine. Visit local markets, attend cultural events, and explore neighborhoods off the beaten path to experience the true essence of your destination."},
                {id: 7, visibility: false, title: "How can I minimize my environmental impact while traveling?", text: "Travel sustainably by reducing single-use plastic consumption, conserving water and energy, supporting eco-friendly accommodations and tour operators, and respecting local wildlife and ecosystems. Leave no trace and strive to make a positive contribution to the places you visit."},
                {id: 8, visibility: false, title: "How do I handle travel setbacks like flight delays and cancellations?", text: "Stay patient and informed. Have a copy of your travel insurance policy handy, as it might cover expenses related to delays and cancellations. Contact your airline or travel provider immediately, and consider signing up for flight alerts to receive real-time updates."},
                {id: 9, visibility: false, title: "Is travel insurance necessary?", text: "While not mandatory, travel insurance is highly recommended. It can provide coverage for medical emergencies, trip cancellations, lost baggage, and other unforeseen events. Read the policy details carefully to understand what's covered and choose a plan that suits your needs."},
                {id: 10, visibility: false, title: "What's the secret to capturing amazing travel photos?", text: "Experiment with composition, lighting, and angles to create unique shots. Don't forget to put the camera down occasionally and truly experience the moment. Research photography tips for your destination and use editing tools to enhance your images if desired."},
            ]
        }
}