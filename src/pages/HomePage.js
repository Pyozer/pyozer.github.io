import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import ImageProfil from '../components/images/ImageProfil';

import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

import './css/HomePage.css';

class HomePage extends Component {
    
    state = {
        renderMsg: false,
    }
    
    onHeaderTyped = () => {
        this.setState({ renderMsg: true });
    }

    render() {
        return (
            <div class="p-3 p-md-5 text-center">
                <div class="col-12 col-md-8 col-xl-5 mx-auto my-5">
                    <ImageProfil className="rounded-circle shadow" width="160" />
                    
                    <h1 class="display-4 mt-4">
                        Hi, I'm
                        <br />
                        <Typist startDelay="1000" onTypingDone={this.onHeaderTyped}>
                            <strong className="font-weight-bold">Jean-Charles Moussé</strong>.
                        </Typist>
                    </h1>
                    <p class="lead mt-4">
                        I have a large interest in programming and I love to apply my skills to my personal projects.     
                    </p>

                    <div class="mt-5 d-flex justify-content-between social_link">
                        <a href="https://github.com/Pyozer/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={["fab", "github"]} size="2x" className="text-white" />
                        </a>
                        <a href="https://twitter.com/jc_mousse/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" className="text-white" />
                        </a>
                        <a href="https://www.facebook.com/jeancharles.mousse" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" className="text-white" />
                        </a>
                        <a href="https://www.instagram.com/j_mousse/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" className="text-white" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;