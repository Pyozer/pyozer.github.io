import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './css/Navigation.css';

const ListNavItem = [
    { title: "HOME", to: "/" },
    { title: "ABOUT", to: "/about" },
    { title: "SKILLS", to: "/skills" },
    { title: "PROJECTS", to: "/projects" },
    { title: "CONTACT", to: "/contact" },
];

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {isMobileNavOpen: false };
        this.toggleMobileNav = this.toggleMobileNav.bind(this);
    }

    toggleMobileNav() {
        this.setState({isMobileNavOpen: !this.state.isMobileNavOpen});
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-white shadow py-0">
                <div className="container">
                    <button onClick={this.toggleMobileNav} className="navbar-toggler my-2 border-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={"collapse navbar-collapse" + (this.state.isMobileNavOpen ? " show" : "")} id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            {
                                ListNavItem.map((item, i) =>
                                    <li className="nav-item" key={i}> 
                                        <NavLink activeClassName="active" className="nav-link py-4 px-2 px-md-4 px-lg-5" exact to={item.to}>{item.title}</NavLink>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;