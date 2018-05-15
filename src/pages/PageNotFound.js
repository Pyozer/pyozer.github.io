import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import CenterElement from '../components/CenterElement';

const PageNotFound = ({ location }) => (
    <CenterElement className="m-5">
        <h1 className="display-1 font-weight-bold text-shadow-effect mb-5">404</h1>
        <h2 className="display-4 font-weight-normal">Looks like you're lost</h2>
        <h3 className="font-weight-light mb-5">The page you are looking for not available !</h3>

        <Link to="/" className="btn btn-outline-light btn-lg py-3 px-5 border-transparent">
            <strong>GO TO HOME</strong> <FontAwesomeIcon icon={["fas", "arrow-right"]} className="ml-2" />
        </Link>
    </CenterElement>
);

export default PageNotFound;