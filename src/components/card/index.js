import React from 'react';
import Button from '../button/index.js'
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

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
                   <DeleteOutlineOutlinedIcon fontSize="small" />
               </IconButton>   
            </Button>
        </div>
    )
}

export default Card;