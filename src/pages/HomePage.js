import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageProfil from '../components/images/ImageProfil';

import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

import './css/HomePage.css';
import CenterElement from '../components/CenterElement';
import { withTitle } from '../Context';

class HomePage extends Component {

    state = {
        renderMsg: false,
    }

    onHeaderTyped = () => {
        this.setState({ renderMsg: true });
    }

    render() {
        return (
            <CenterElement className="mt-3 mt-md-5 p-5">
                <div className="text-center">
                    <ImageProfil className="rounded-circle shadow" width="160" />

                    <h1 className="display-4 mt-4">
                        Hi, I'm
                        <br />
                        <Typist startDelay={1000} onTypingDone={this.onHeaderTyped} cursor={{ element: "|||||" }} className="text-primary">
                            <strong className="font-weight-bold">Jean-Charles Moussé</strong>
                        </Typist>
                    </h1>
                    <p className="lead mt-4">
                        I have a large interest in programming and I love to apply my skills to my personal projects.
                    </p>

                    <div className="mt-5 d-flex justify-content-between social_link">
                        <a href="https://github.com/Pyozer/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={["fab", "github"]} size="3x" className="text-dark github" />
                        </a>
                        <a href="https://twitter.com/jc_mousse/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" className="text-dark twitter" />
                        </a>
                        <a href="https://fr.linkedin.com/in/jean-charles-moussé" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" className="text-dark linkedin" />
                        </a>
                        <a href="https://www.facebook.com/jeancharles.mousse" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={["fab", "facebook"]} size="3x" className="text-dark facebook" />
                        </a>
                        <a href="https://www.instagram.com/j_mousse/" target="_blank" rel="noopener noreferrer">
                            <svg width="0" height="0">
                                <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                                    <stop stopColor="#fdf497" offset="0" />
                                    <stop stopColor="#fdf497" offset="0.05" />
                                    <stop stopColor="#fd5949" offset="0.45" />
                                    <stop stopColor="#d6249f" offset="0.6" />
                                    <stop stopColor="#285AEB" offset="0.9" />
                                </radialGradient>
                            </svg>
                            <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" className="text-dark instagram" />
                        </a>
                    </div>
                </div>
            </CenterElement>
        );
    }
}

export default withTitle(HomePage, "Home");