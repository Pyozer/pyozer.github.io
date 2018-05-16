import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import TextAreaOutline from './ui/TextAreaOutline';
import TextInputOutline from './ui/TextInputOutline';

class FormContact extends Component {
    render() {
        return (
            <form {...this.props}>
                <div class="row mb-4">
                    <TextInputOutline className="col-md-6 mb-4 mb-md-0" type="text" id="inputFirstname" placeholder="Enter your first name" label="Your First Name" required />
                    <TextInputOutline className="col-md-6 mt-3 mt-md-0" type="text" id="inputLastname" placeholder="Enter your last name" label="Your Last Name" required />
                </div>
                <div class="row mb-4">
                    <TextInputOutline className="col-12" type="text" id="inputEmail" placeholder="Enter your email" label="Your Email" required />
                </div>
                <div class="row mb-4">
                    <TextInputOutline className="col-12" type="text" id="inputSubject" placeholder="What's the subject ?" label="Subject" required />
                </div>
                <div class="row mb-4">
                    <TextAreaOutline className="col-12" type="text" id="inputMessage" placeholder="Write your message..." label="Message" required />
                </div>
                <button type="submit" class="btn btn-outline-primary btn-rounded transition-3d-hover btn-lg px-5 py-3 font-weight-bold">
                    Send message <FontAwesomeIcon icon={["fab", "telegram-plane"]} className="ml-2"/>
                </button>
            </form>
        );
    }
}

export default FormContact;