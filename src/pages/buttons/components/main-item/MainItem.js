import './MainItem.css';
import starInit from '../../../../resources/icons/star.png';
import starActive from '../../../../resources/icons/star-active.png';

const MainItem = (props) => {
    const {id, img, city, point, country, favorite, onSwitchFavorite, onShowCard} = props;

    const star = favorite ? starActive : starInit;

    return (
        <li>
            <img src={img} alt={city} />
            <div className="item__wrapper">
                <div className="item__wrapper_title">
                    <div>
                        <h5 className="item__title">{city} <span>({country})</span></h5>
                        <img src={star} alt="star" onClick={() => onSwitchFavorite(id)}/>
                    </div>
                    <span className='item__ranking'>Ranking: <span>{point}</span>/10</span>
                </div>
                <p className="item__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quibusdam ipsam, cupiditate natus deleniti iure libero aut ea mollitia obcaecati itaque laudant.</p>
                
                <button className="item__btn" onClick={() => onShowCard(id)}>Select</button>
            </div>
        </li>
    )
}

export default MainItem;