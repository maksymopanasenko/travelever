import MainItem from '../main-item/MainItem';
import getData from '../../../../db/db';

import '../StyleBlocks.css';

function Button({onUpdateList}) {
    return <button onClick={onUpdateList} className='main__more'>Load more...</button>
}

const Main = ({data, onUpdateList}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <MainItem key={id} {...itemProps}/>
        )
    });

    return (
        <div className="main">
            <ul>
                {elements}
            </ul>

            {data.length < getData().length ? <Button onUpdateList={onUpdateList}/> : null}
        </div>
    );
}

export default Main;