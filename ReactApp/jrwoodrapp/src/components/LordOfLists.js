import React from 'react';
import LordCard from './LordCard';

const LordOfLists = props => {
    return (
        <div>
            {props.lordList.map(lord => (
                <LordCard lord={lord} key={lord.name} />
            ))}
        </div>
    )
}


export default LordOfLists;