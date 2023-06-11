import './MainItem.css';
import star from '../../../../resources/icons/star.png';

const MainItem = (props) => {
    const {img, city, point, country} = props;

    return (
        <li>
            <img src={img} alt="img" />
            <div className="item__wrapper">
                <div className="item__wrapper_title">
                    <div>
                        <h5 className="item__title">{city} <span>({country})</span></h5>
                        <img src={star} alt="star" />
                    </div>
                    <span className='item__ranking'>Ranking: <span>{point}</span>/10</span>
                </div>
                <p className="item__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quibusdam ipsam, cupiditate natus deleniti iure libero aut ea mollitia obcaecati itaque laudant.</p>
                
                <button className="item__btn">Select</button>
            </div>
        </li>
    )
}

export default MainItem;