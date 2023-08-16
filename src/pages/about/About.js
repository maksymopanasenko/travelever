import { useState } from 'react';
import './About.css';
import getData from '../../db/db';

const variants = getData().faq;

const Accordion = () => {
    const [accordion, setAccordion] = useState(variants);

    const onShowContent = (e) => {
        const target = e.target;
        const result = accordion.map((item, i) => { 
            if (Number(target.parentElement.id) === i) {
                return {...item, visibility: !item.visibility};
            } else {
                return item;
            }
        });

        setAccordion(result);
    }

    const ready = accordion.map((item, i) => {
        return (
            <div key={i} id={i} className="accordion__item" onClick={onShowContent}>
                <div className="accordion__header">{i + 1}. {item.title}</div>
                <div className="accordion__content"  style={item.visibility ? {display: 'block'} : {display: 'none'}}>{item.text}.</div>
            </div>
        )
    });

    return (
        <div className="accordion">
            {ready}
        </div>
    )
}

function About() {
    
    return (
        <div className="about">
            <div className="container">
                <h2 className="about__title">Briefly about TrevelEver</h2>
                <p className="about__paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci, iste molestias vel delectus necessitatibus dicta? Ipsum amet similique voluptatum inventore cumque sint reiciendis placeat corporis vel dicta aspernatur aliquid quasi quisquam veritatis, vero id incidunt minus tempora officiis obcaecati numquam! Culpa ut magni ducimus ipsa id ipsam, quibusdam consequuntur?
                </p>

                <Accordion />
            </div>
        </div>
    )
}

export default About;