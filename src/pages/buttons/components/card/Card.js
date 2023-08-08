import './Card.css';
import money from '../../../../resources/icons/characteristics/dollar.png';
import monument from '../../../../resources/icons/characteristics/historic-site.png';
import shield from '../../../../resources/icons/characteristics/security.png';

const Card = ({choosedCard}) => {
    const {selectedValue} = choosedCard;
    if (!choosedCard.cardData) return;
    const {city, img, flightId, characteristics} = choosedCard.cardData;

    const currMonth = new Date().getMonth() + 1;

    return (
        <div className='card' style={{backgroundImage: 'url(' + img + ')'}}>
            <div className="card__content">
                <button className="card__close" onClick={choosedCard.onClose}>x</button>
                <h3 className='card__title'><span>{city}</span></h3>
                <div className="divider"></div>
                <div className='card__body'>
                    <img src={img} alt={city} className='card__img'/>
                    <div className="card__wrapper">
                        <Chars characteristics={characteristics}/>
                        <p className='card__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates porro quae quo numquam repellendus pariatur sint hic dolorum voluptatibus accusantium magni ullam officiis, sit voluptate et nihil, quas ipsa velit.</p>
                        <a href={'https://www.skyscanner.pl/transport/loty/' + selectedValue + '/' + flightId + '/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=0&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&oym=230' + currMonth + '&qp_prevScreen=HOMEPAGE&selectedoday=08'} target='blank' className="card__btn">View flights</a>
                        <a href='https://www.booking.com/' target='blank' className="card__btn">View hotels</a>
                    </div>
                </div>
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

const Chars = ({characteristics}) => {

    const {price, safety, attraction} = characteristics;

    
    return (
        <ul className="card__charts">
            <li className="card__item">
                <div className="card__icons">
                    <Image prop={price} url={money}/>
                </div>
                <h5 className="card__label">Price</h5>
            </li>
            <li className="card__item">
                <div className="card__icons">
                    <Image prop={safety} url={shield}/>
                </div>
                <h5 className="card__label">Safety</h5>
            </li>
            <li className="card__item">
                <div className="card__icons">
                    <Image prop={attraction} url={monument}/>
                </div>
                <h5 className="card__label">Attraction</h5>
            </li>
        </ul>
    );
}

const Image = ({prop, url}) => {
    const imageArray = new Array(prop).fill(null);
  
    return (
      <div>
        {imageArray.map((_, index) => (
          <img key={index} src={url} alt={index + 1} className='card__icon'/>
        ))}
      </div>
    );
  }

export default Overlay;