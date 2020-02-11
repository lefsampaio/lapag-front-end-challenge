import React, { useState, useEffect} from 'react';
import Button from '../button/index.js'

const Card = props => {
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.name}</p>
            <p>{props.duration}</p>
            <Button text='oi'/>
        </div>
    )
}

export default Card;