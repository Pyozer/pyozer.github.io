import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import firebase from '../api/firebase';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import ContainerTitle from '../components/ui/ContainerTitle';
import Gallery from '../components/images/Gallery';
import GitHubContribution from '../components/images/GitHubContribution';

import Project from './Project';
import { withTitle } from '../Context';

class Projects extends Component {

    state = {
        projects: null,
        categories: null
    };

    componentWillMount() {
        this.firebaseRefButtons = firebase.database().ref('/projects_category');
        this.firebaseCallbackButtons = this.firebaseRefButtons.orderByChild("order").on('value', (snap) => {
            let data = [];
            snap.forEach((childSnap) => {
                data.push(childSnap.val())
            })
            this.setState({ categories: data });
        });

        this.firebaseRefProjects = firebase.database().ref('/projects');
        this.firebaseCallbackProjects = firebase.database().ref('/projects').orderByChild("order").on('value', (snap) => {
            let data = [];
            snap.forEach((childSnap) => {
                data.push(childSnap.val())
            })
            this.setState({ projects: data });
        });
    }
      
    /*componentWillUnmount() {
        this.firebaseRefButtons.off('value', this.firebaseCallbackButtons);
        this.firebaseRefProjects.off('value', this.firebaseCallbackProjects);
    }*/

    render() {
        return (
            <Switch>
                <Route path="/projects/:projectId" component={Project} />
                <Route exact path="/projects" render={ () =>
                    <div>
                        <ContainerTitle title="Projects">
                            {this.state.projects || this.state.categories ? (
                                <Gallery elems={this.state.projects} buttons={this.state.categories} baseUrl="/projects/" colItemClass="col-12 col-sm-6 col-md-4 col-lg-3" />
                            ) : (
                                <div className="my-5 text-center">
                                    <FontAwesomeIcon icon={["fas", "spinner"]} size="2x" spin className="text-dark" />
                                </div>
                            )}
                            </ContainerTitle>
                        <ContainerTitle title="Activity">
                            <GitHubContribution username="Pyozer" theme="standard"/>
                        </ContainerTitle>
                    </div>
                } />
            </Switch>
        );
    }
}

export default withTitle(Projects, "Projects");