import React from 'react';

const ButtonSubmit = (props) => {
    const className = "btn btn-outline-primary btn-rounded btn-lg w-100 w-sm-auto transition-3d-hover px-5 py-2 font-weight-bold "

    if(props.islink) {
        return (
            <a {...props} className={className + props.className}>
                {props.children}
            </a>
        )
    } else {
        return (
            <button
                {...props}
                type={props.type || "submit"}
                className={className + props.className}
            >
                {props.children}
            </button>
        )
    }    
};

export default ButtonSubmit;