import React from 'react';

import imgSrc from '../../assets/img_profil.png';

const ImageProfil = (props) => (
    <img
        src={imgSrc}
        alt={props.alt || "Jean-Charles Moussé"}
        {...props} />
);

export default ImageProfil;