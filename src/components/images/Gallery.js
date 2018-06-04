import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import ImageWithLoader from '../ui/ImageWithLoader';

class Gallery extends Component {

    render() {
        return (
            <div>
                {this.props.data && 
                    <div className="row">
                        {this.props.data.map((item, index) => (
                            <GalleryItem src={item.src} url={item.url} title={item.title} subtitle={item.subtitle} className={this.props.colItemClass} key={index} />
                        ))}
                    </div>
                }
            </div>
        );
    }
}

const GalleryItem = ({src, url, title, subtitle, className}) => {

    const imgItem = () => (
        <ImageWithLoader src={src} className="rounded w-100 transition-3d-hover" alt={title || "Image"} />
    )

    return (
        <div className={className + " py-2"}>
            {url ? (
                <Link to={url}>
                    { imgItem() }
                </Link>
            ) : ( 
                imgItem()
            )}
            {(title || subtitle) && 
                <div className="py-3">
                    {title && <h4 className="h6 text-dark mb-0">{title}</h4> }
                    {subtitle && <p className="small mb-0">{subtitle}</p> }
                </div>
            }
        </div>
    )
};

export default Gallery;