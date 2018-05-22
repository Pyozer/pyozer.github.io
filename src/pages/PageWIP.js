import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import TextInputOutline from '../components/ui/TextInputOutline';
import firebase from '../api/firebase';
import ButtonSubmit from '../components/ui/ButtonSubmit';

class PageWIP extends Component {

    constructor(props) {
        super(props);
        this.state = { email: "", isMessage: null }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 
    
    handleChange(event) {
        this.setState({email: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        var subscribersRef = firebase.database().ref('/subscribers');
        subscribersRef.once('value').then((snapshot) => {
            var isExists = false;
            snapshot.forEach((element) => {
                if (element.val().email === this.state.email)
                    isExists = true;
            });
            if(!isExists) {
                let newUserRef = subscribersRef.push();
                newUserRef.set({ email: this.state.email, date: Date.now() });
                this.setState({ email: "", isMessage: {
                    message: "Your email has been successfully added ;)",
                    isSuccess: true
                }})
            } else {
                this.setState({ isMessage: {
                    message: "This email has been already added to be notified !",
                    isSuccess: false
                }})
            }
        });
        
    }

    render() {
        return (
            <div className="container h-100">
                <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                    <div className="text-center">
                        <h1>WEBSITE UNDER RECONSTRUCTION</h1>
                        <h3>Available soon!</h3>
                        
                        <h4 className="my-5">Send your email to be notified when my website will be open.</h4>
                        <form onSubmit={this.handleSubmit}>
                            <TextInputOutline
                                className="col-12 mx-auto"
                                type="email"
                                id="inputEmail"
                                placeholder="Write your email"
                                label="Your Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required />

                            <ButtonSubmit>
                                Send <FontAwesomeIcon icon={["fab", "telegram-plane"]} className="ml-2"/>
                            </ButtonSubmit>
                        </form>
                        {this.state.isMessage && this.state.isMessage !== "" && 
                            <div className={"mt-4 alert alert-" + (this.state.isMessage.isSuccess ? "success" : "danger")} role="alert">
                                {this.state.isMessage.message}
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={(e) => this.setState({isMessage: null})}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default PageWIP;