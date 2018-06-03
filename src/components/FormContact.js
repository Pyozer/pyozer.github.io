import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import TextAreaOutline from './ui/TextAreaOutline';
import TextInputOutline from './ui/TextInputOutline';
import ButtonSubmit from './ui/ButtonSubmit';

import { withRouter } from 'react-router-dom';

class FormContact extends Component {

    render() {
        const isSendSuccess = this.props.location.search.indexOf('email=sended') !== -1; // Si il y a le paramètre
 
        return (
            <form {...this.props} action="https://formspree.io/jeancharles.msse@gmail.com" method="POST">
                {isSendSuccess === true &&  
                    <div className="mb-5 alert alert-success" role="alert">
                        Your message has been successfully send.
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={(e) => {this.props.location.search = ""; this.setState({isSendSuccess: false})}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                }
                <div className="row mb-4">
                    <TextInputOutline className="col-md-6 mb-4 mb-md-0" type="text" name="firstname" id="inputFirstname" placeholder="Enter your first name" label="Your First Name" required />
                    <TextInputOutline className="col-md-6 mt-3 mt-md-0" type="text" name="lastname" id="inputLastname" placeholder="Enter your last name" label="Your Last Name" required />
                </div>
                <div className="row mb-4">
                    <TextInputOutline className="col-12" type="text" name="email" id="inputEmail" placeholder="Enter your email" label="Your Email" required />
                </div>
                <div className="row mb-4">
                    <TextInputOutline className="col-12" type="text" name="_subject" id="inputSubject" placeholder="What's the subject ?" label="Subject" required />
                </div>
                <div className="row mb-4">
                    <TextAreaOutline className="col-12" type="text" name="message" id="inputMessage" placeholder="Write your message..." label="Message" required />
                </div>
                <ButtonSubmit className="py-3">
                    Send message <FontAwesomeIcon icon={["fab", "telegram-plane"]} className="ml-2"/>
                </ButtonSubmit>
                <input type="hidden" name="_next" value="https://pyozer.github.io/contact?email=sended" />
            </form>
        );
    }
}

export default withRouter(FormContact);