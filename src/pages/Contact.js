import React, { Component } from 'react';
import FormContact from '../components/FormContact';
import ContainerTitle from '../components/ui/ContainerTitle';
import { withTitle } from '../Context';

class Contact extends Component {
    render() {
        return (
            <ContainerTitle title="Contact me">
                <FormContact className="my-5"/>
            </ContainerTitle>
        );
    }
}

export default withTitle(Contact, "Contact");