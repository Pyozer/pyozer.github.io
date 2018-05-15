import React from 'react';

const CenterElement = (props) => (
    <div className={"d-flex flex-column align-items-center " + props.className} style={props.style}>
        {props.children}
    </div>
);

export default CenterElement;