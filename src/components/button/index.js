import React, { Fragment } from "react";
import './style.css'

const Button = (props) => {
    return (
      <button  onClick={props.handleClick} className='button' key={props.id} type={props.type}> {props.text}</button>
  );
}

export default Button