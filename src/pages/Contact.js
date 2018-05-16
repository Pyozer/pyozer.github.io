import React, { Component } from 'react';
import FormContact from '../components/FormContact';

class Contact extends Component {
    render() {
        return (
            <div className="container mt-4 mt-md-5 p-4 p-md-5">
                <h1 className="display-4 text-primary font-weight-bold mb-4 mb-md-5">Contact</h1>

                <FormContact />
            </div>
        );
    }
}

export default Contact;