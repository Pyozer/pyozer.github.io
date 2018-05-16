import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class FormContact extends Component {
    render() {
        return (
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6 mb-4">
                        <label className="font-weight-bold" for="inputFirstname">Firstname</label>
                        <input type="text" class="form-control" id="inputFirstname" placeholder="Enter your firstname" required/>
                    </div>
                    <div class="form-group col-md-6 mb-4">
                        <label className="font-weight-bold" for="inputFirstname">Lastname</label>
                        <input type="text" class="form-control" id="inputLastname" placeholder="Enter your lastname" required/>
                    </div>
                </div>
                <div class="form-group mb-4">
                    <label className="font-weight-bold" for="inputSubject">Subject</label>
                    <input type="text" class="form-control" id="inputSubject" placeholder="Enter subject" required/>
                </div>
                <div class="form-group mb-4">
                    <label className="font-weight-bold" for="inputMessage">Message</label>
                    <textarea class="form-control" id="inputMessage" rows="3" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit" class="btn btn-outline-primary btn-rounded btn-lg px-5 py-3 font-weight-bold">Send <FontAwesomeIcon icon={["fab", "telegram-plane"]} className="ml-2"/></button>
            </form>
        );
    }
}

export default FormContact;