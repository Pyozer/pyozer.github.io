import React from 'react';

const ImageProfil = (props) => (
    <img
        src="https://avatars1.githubusercontent.com/u/16879166"
        alt={props.alt || "Jean-Charles Moussé"}
        {...props} />
);

export default ImageProfil;