import React from 'react';

const ButtonSubmit = (props) => (
    <button
        {...props}
        type={props.type || "submit"}
        className={"btn btn-outline-primary btn-rounded btn-lg w-100 w-sm-auto transition-3d-hover px-5 py-2 font-weight-bold " + props.className}
    >
        {props.children}
    </button>
);

export default ButtonSubmit;