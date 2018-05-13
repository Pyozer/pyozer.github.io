import React, { Component } from 'react';
import CenterElement from '../components/CenterElement';

const PageNotFound = ({ location }) => (
    <CenterElement className="m-5">
        <h1 className="display-2 font-weight-bold">404</h1>
        <h3 className="text-white">
            No match for <code>{location.pathname}</code>
        </h3> 
    </CenterElement>
);

export default PageNotFound;