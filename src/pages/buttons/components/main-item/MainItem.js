import './MainItem.css';
import star from '../../../../resources/icons/star.png';

const MainItem = (props) => {
    const {img, city, country} = props;

    return (
        <>
            <li>
                <img src={img} alt="img" />
                <div className="item__wrapper">
                    <div className="item__wrapper_title">
                        <h5 className="item__title">{city} <span>({country})</span></h5>
                        <img src={star} alt="star" />
                    </div>
                    <p className="item__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quibusdam ipsam, cupiditate natus deleniti iure libero aut ea mollitia obcaecati itaque laudantium aliquid explicabo, deserunt, omnis tempora corrupti sequi in?</p>
                </div>
                <button className="item__btn">Select</button>
            </li>
        </>
    )
}

export default MainItem;