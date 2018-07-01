import React from 'react';
import Link from 'react-router-dom/Link';
import ImageWithLoader from '../ui/ImageWithLoader';

const Gallery = (props) => (
    <div>
        {props.data && 
            <div className="d-flex flex-wrap justify-content-around">
                {props.data.map((item, index) => (
                    <GalleryItem src={item.src} url={item.url} title={item.title} subtitle={item.subtitle} className={props.colItemClass || ""} imgClass={props.imgClass || ""} key={index} />
                ))}
            </div>
        }
    </div>
)

const GalleryItem = ({src, url, title, subtitle, className, imgClass}) => {

    const imgItem = () => (
        <ImageWithLoader src={src} className={"img-fluid rounded " + imgClass} alt={title || "Image"} style={{maxHeight: 400}} />
    )

    return (
        <div className={"my-2 " + className}>
            <div className="transition-3d-hover p-3 rounded">
                {url ? (
                    <Link to={url}>
                        { imgItem() }
                    </Link>
                ) : ( 
                    imgItem()
                )}
                {(title || subtitle) && 
                    <div className="pt-3">
                        {title && <h4 className="h6 text-dark mb-0">{title}</h4> }
                        {subtitle && <p className="small mb-0">{subtitle}</p> }
                    </div>
                }
            </div>
        </div>
    )
};

export default Gallery;