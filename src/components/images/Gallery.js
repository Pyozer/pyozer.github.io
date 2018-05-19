import React, { Component } from 'react';
import GalleryItem from './GalleryItem';

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
                <div className="d-flex flex-column flex-md-row justify-content-center mx-auto py-3">
                    {this.props.buttons.map((item, index) => {
                        return (
                            <button key={index} onClick={(e) => this.setCat(item.category)} className={(cat === item.category ? activeBtn : classBtn)}>
                                {item.title}
                            </button>
                        )
                    })}
                </div>
                <div className="row">
                    {this.props.elems.map((item, index) => {
                        if(cat === "" || cat === item.category)
                            return (
                                <GalleryItem img={item.img} title={item.title} subtitle={item.subtitle} key={index} />
                            )
                        return null;
                    })}
                </div>
            </div>
        );
    }
}

export default Gallery;