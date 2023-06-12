import MainItem from '../main-item/MainItem';

import '../StyleBlocks.css';

const Main = ({data}) => {


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

            <button className='main__more'>Load more...</button>
        </div>
    );
}

export default Main;