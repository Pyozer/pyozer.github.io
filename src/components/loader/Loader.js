import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import CenterElement from '../CenterElement';


const Loader = () => (
    <CenterElement className="mt-9 pt-5">
        <h1 className="display-4">Loading <FontAwesomeIcon icon={["fab", "connectdevelop"]} size="xs" spin className="ml-2" /></h1>
    </CenterElement>
);

export default Loader;