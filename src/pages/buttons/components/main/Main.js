import MainItem from '../main-item/MainItem';

import '../StyleBlocks.css';

function Button({onUpdateList}) {
    return <button onClick={onUpdateList} className='main__more'>Load more...</button>
}

function Choise() {
    return <p className='main__choise'>Please select the desired continents to search for.</p>
}

const Main = ({data, fullData, onUpdateList}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <MainItem key={id} {...itemProps}/>
        )
    });

    return (
        <div className="main">
            <ul>
                {data.length !== 0 ? elements : <Choise/>}
            </ul>

            {data.length >= 5  && data.length < fullData.length ? <Button onUpdateList={onUpdateList}/> : null}
        </div>
    );
}

export default Main;