import React from 'react';

const ContainerTitle = (props) => (
    <div className="container mt-4 mt-md-5 p-4">
        <h1 className="display-4 text-primary font-weight-bold mb-4 mb-md-5">{props.title}</h1>

        {props.children}
    </div>
);

export default ContainerTitle;