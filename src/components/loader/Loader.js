import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import CenterElement from '../CenterElement';


const Loader = () => (
    <CenterElement className="p-3">
        <h1>Loading <FontAwesomeIcon icon={["fab", "connectdevelop"]} size="xs" spin className="ml-2" /></h1>
    </CenterElement>
);

export default Loader;