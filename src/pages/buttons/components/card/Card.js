import './Card.css';

const Card = ({choosedCard}) => {
    if (!choosedCard.cardData) return;
    const {city, img} = choosedCard.cardData;

    return (
        <div className='card'>
            <button className="card__close" onClick={choosedCard.onClose}>x</button>
            <h3 className='card__title'>{city}</h3>
            <div className='card__body'>
                <img src={img} alt={city} className='card__img'/>
                <p className='card__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates porro quae quo numquam repellendus pariatur sint hic dolorum voluptatibus accusantium magni ullam officiis, sit voluptate et nihil, quas ipsa velit.</p>
            </div>
        </div>
    )
}

const Overlay = (props) => {
    const display = props.cardData ? 'flex' : 'none';
    return (
        <div className="overlay" style={{display: display}}>
            <Card choosedCard={props}/>
        </div>
    )
}

export default Overlay;