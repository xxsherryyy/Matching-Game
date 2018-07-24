import React from "react";

const Alert = props => {
    console.log(props);
    // props.type; // fail
    return (
        <div className={'alert alert-${props.type}'} role = "alert">
            {props.children}
        </div>
    );
};

export default Alert;