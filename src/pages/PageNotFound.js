import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import CenterElement from '../components/CenterElement';

const PageNotFound = ({ location }) => (
    <CenterElement className="mt-3 mt-md-5 p-5 text-center">
        <h1 class="display-3 text-primary font-weight-normal">Page not <span class="font-weight-bold">found</span></h1>
        <h3 className="font-weight-light mb-5 mt-3">Oops! Looks like you followed a bad link.</h3>

        <Link to="/" className="btn btn-outline-primary btn-lg btn-rounded transition-3d-hover py-3 px-5 mt-4">
            <strong>GO TO HOME</strong> <FontAwesomeIcon icon={["fas", "arrow-right"]} className="ml-2" />
        </Link>
    </CenterElement>
);

export default PageNotFound;