import React from 'react';

const CenterElement = (props) => (
    <div className={"d-flex flex-column justify-content-center align-items-center h-100 " + props.className} style={props.style}>
        {props.children}
    </div>
);

export default CenterElement;