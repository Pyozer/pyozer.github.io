import React, { Component } from 'react';
import { firebase } from '@firebase/app';
import ContainerTitle from '../components/ui/ContainerTitle';
import ImageWithLoader from '../components/ui/ImageWithLoader';

class Skills extends Component {

    state = {
        skills: []
    }

    componentWillMount() {
        this.firebaseRefSkills = firebase.database().ref('/skills');
        this.firebaseCallbackSkills  = this.firebaseRefSkills.on('value', (snap) => {
            console.log(snap.val());
            this.setState({ skills: snap.val() });
        });
    }

    componentWillUnMount() {
        this.firebaseRefSkills.off('value', this.firebaseCallbackSkills);
    }

    render() {
        return (
            <ContainerTitle title="Skills">
                <div className="row">
                    { this.state.skills.map((item, index) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                            <div class="card border-0 text-center">
                                <ImageWithLoader src={item.image} className="card-img-top" style={{width: 80}} />
                                <div class="card-body">
                                    <h3 className="card-title">{item.name}</h3>
                                </div>
                                <div class="card-footer bg-light p-0">
                                    <div className="progress rounded-0">
                                        <div className="progress-bar" role="progressbar" style={{width: item.percent}} aria-valuenow={item.percent} aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </ContainerTitle>
        );
    }
}

export default Skills;