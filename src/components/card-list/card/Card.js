import React from 'react';

import './Card.css'

const Card = (props) => {
    return(
        <div className="card-container">
            <img alt="cartoon" 
            src={`https://robohash.org/${props.cartoon.id}?set=set1&size=180x180`}>
            </img>
            <h2>{ props.cartoon.name }</h2>
            <p>{props.cartoon.email}</p>
        </div>
    )
}

export default Card;