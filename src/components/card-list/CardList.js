import React from 'react';
import Card from './card/Card';

import "./CardList.css";

const CardList = ( props ) => {
    return(
        <div className= "card-list">
        {
            props.cartoons.map(cartoon =>
            <Card key={cartoon.id} cartoon={cartoon} />)           
        }
        </div> 
    );
}

export default CardList;