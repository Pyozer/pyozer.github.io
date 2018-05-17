import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FormContact from '../components/FormContact';
import ContainerTitle from '../components/ui/ContainerTitle';


class Contact extends Component {
    render() {
        return (
            <ContainerTitle title="Contact me">
                <FormContact className="mt-5"/>
            </ContainerTitle>
        );
    }
}

export default Contact;