import React from 'react';

const LordCard = props => {
    return (
        <div>
            <h1>Name: {props.lord.name}</h1>
            <p>Bio: {props.lord.bio}</p>
        </div>
    )
}


export default LordCard;