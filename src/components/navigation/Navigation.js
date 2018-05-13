import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import './css/Navigation.css';

class Navigation extends Component { 
    
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light shadow py-0">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item"> 
                                <NavLink activeClassName="active" className="nav-link py-4 px-2 px-md-4 px-lg-5" exact to="/">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link py-4 px-2 px-md-4 px-lg-5" to="/about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link py-4 px-2 px-md-4 px-lg-5" to="/skills">SKILLS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link py-4 px-2 px-md-4 px-lg-5" to="/projects">PROJECTS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link py-4 px-2 px-md-4 px-lg-5" to="/contact">CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;