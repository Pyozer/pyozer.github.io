import React from 'react';
import ImageWithLoader from '../ui/ImageWithLoader';

const GalleryItem = (props) => (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-2">
        <ImageWithLoader src={props.img} className="rounded w-100 transition-3d-hover" alt={props.title} />
        <div className="py-3">
            <h4 className="h6 text-dark mb-0">{props.title}</h4>
            <p className="small mb-0">{props.subtitle}</p>
        </div>
    </div>
);

export default GalleryItem;