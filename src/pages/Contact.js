import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FormContact from '../components/FormContact';


class Contact extends Component {
    render() {
        return (
            <div className="container mt-4 p-4">
                <h1 className="display-4 text-primary font-weight-bold">Contact me</h1>

                <FormContact className="mt-5"/>
            </div>
        );
    }
}

export default Contact;