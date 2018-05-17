import React from 'react';

const ContainerTitle = (props) => (
    <div className="container mt-4 p-4">
        <h1 className="display-4 text-primary font-weight-bold mb-4">{props.title}</h1>

        {props.children}
    </div>
);

export default ContainerTitle;