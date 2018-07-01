import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class ImageWithLoader extends Component {

    constructor(props) {
        super(props);
        this.state = { imageLoaded: false, errorLoad: false };

        this.handleImageLoaded = this.handleImageLoaded.bind(this);
        this.handleImageErrored = this.handleImageLoaded.bind(this);
    }

    handleImageLoaded() {
        this.setState({ imageLoaded: true, errorLoad: false });
    }

    handleImageErrored() {
        this.setState({ imageLoaded: false, errorLoad: true });
    }

    render() {
        let imgClass = this.props.className + (!this.state.imageLoaded ? " invisible" : "");
        return (
            <div className={"position-relative d-flex align-items-end justify-content-center" + (!this.state.imageLoaded ? " bg-light" : "")} style={{minHeight: 85}}>

                <img
                    {...this.props}
                    className={imgClass}
                    onLoad={this.handleImageLoaded}
                    onError={this.handleImageErrored}
                    alt={this.props.alt}
                />

                {!this.state.imageLoaded && (
                    <div className="position-absolute fixed-top h-100 d-flex justify-content-center align-items-center">
                        {!this.state.errorLoad ? (
                            <FontAwesomeIcon icon={["fas", "spinner"]} size="2x" spin className="text-dark" />
                        ) : (
                            <p className="text-white m-0">Image not found</p>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default ImageWithLoader;