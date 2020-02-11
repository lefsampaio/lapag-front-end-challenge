import React, { useState, useEffect} from 'react';
import Button from '../button/index.js'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/DeleteOutline';

const Card = props => {
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.name}</p>
            <p>{props.duration}</p>
            <Button>
                <IconButton aria-label="delete"
                   className={props.className}
                   onClick={props.handleClick}>
                   <DeleteIcon fontSize="small" />
               </IconButton>   
            </Button>
        </div>
    )
}

export default Card;