import MainItem from '../main-item/MainItem';

import './Main.css';

function Button({onUpdateList}) {
    return <button onClick={onUpdateList} className='main__more'>Load more...</button>
}

function Choise({term, favorite}) {
    const text = favorite ? "You don't have saved favorite destinations..." : 'Please select the desired continents to search for.'

    return <p className='main__choise'>{term.length === 0 ? text : "Nothing found. Try changing filters or changing the data you entered."}</p>
}

const Main = ({data, favorite, fullData, term, onUpdateList, onSwitchFavorite, onShowCard}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return (
            <MainItem key={id} id={id} {...itemProps} onSwitchFavorite={onSwitchFavorite} onShowCard={onShowCard}/>
        )
    });

    return (
        <div className="main">
            <ul>
                {data.length !== 0 ? elements : <Choise term={term} favorite={favorite}/>}
            </ul>

            {
                (!favorite && data.length > 0) || (data.length >= 5  && data.length < fullData.length && !favorite) ?
               <Button onUpdateList={onUpdateList}/> :
               null
            }
        </div>
    );
}

export default Main;