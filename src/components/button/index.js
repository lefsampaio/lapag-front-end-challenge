import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const Button = (props) => {
    return (
        <Fragment>
            <MDBBtn color="brown" onClick={props.handleClick} key={props.id}> {props.text}</MDBBtn>
        </Fragment>
    )
}


export default Button
