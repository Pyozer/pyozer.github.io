import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import ImageWithLoader from '../ui/ImageWithLoader';

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = { cat: "" };
    }

    setCat(newCategory) {
        this.setState({ cat: newCategory })
    }

    render() {
        let baseClass = "btn transition-3d-hover m-2 px-4";
        let classBtn = baseClass + " btn-outline-secondary";
        let activeBtn = baseClass + " btn-primary";

        let cat = this.state.cat;

        return (
            <div>
                {this.props.buttons && 
                    <div className="d-flex flex-column flex-md-row justify-content-center mx-auto py-3">
                        {this.props.buttons.map((item, index) => {
                            return (
                                <button key={index} onClick={(e) => this.setCat(item.category)} className={(cat === item.category ? activeBtn : classBtn)}>
                                    {item.title}
                                </button>
                            )
                        })}
                    </div>
                }
                {this.props.elems && 
                    <div className="row">
                        {this.props.elems.map((item, index) => {
                            if(cat === "" || cat === item.category)
                                return (
                                    <GalleryItem data={item} baseUrl={this.props.baseUrl} className={this.props.colItemClass} key={index} />
                                )
                            return null;
                        })}
                    </div>
                }
            </div>
        );
    }
}

const GalleryItem = (props) => {
    const data = props.data

    const imgItem = () => (
        <ImageWithLoader src={data.images ? data.images[0] : data} className="rounded w-100 transition-3d-hover" alt={data.title || data.id || "Image"} />
    )

    return (
        <div className={props.className + " py-2"}>
            {props.baseUrl && data.id ? (
                <Link to={props.baseUrl + data.id}>
                    {imgItem()}
                </Link>
            ) : (
                imgItem()
            )}
            {(data.title || data.subtitle) && 
                <div className="py-3">
                    {data.title && <h4 className="h6 text-dark mb-0">{data.title}</h4> }
                    {data.subtitle && <p className="small mb-0">{data.subtitle}</p> }
                </div>
            }
        </div>
    )
};

export default Gallery;