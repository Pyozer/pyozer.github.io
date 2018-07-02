import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import firebase from '../api/firebase';

import ContainerTitle from '../components/ui/ContainerTitle';
import GitHubContribution from '../components/images/GitHubContribution';
import ImageWithLoader from '../components/ui/ImageWithLoader';

import Project from './Project';
import { withTitle } from '../Context';

import './css/Projects.css';

class Projects extends Component {

    state = {
        projects: [],
        categories: [],
        category: ""
    }

    componentWillMount() {
        this.firebaseRefButtons = firebase.database().ref('/projects_category');
        this.firebaseCallbackButtons = this.firebaseRefButtons.orderByChild("order").on('value', (snap) => {
            let data = [];
            snap.forEach((childSnap) => { data.push(childSnap.val()) })
            this.setState({ categories: data });
        });

        this.firebaseRefProjects = firebase.database().ref('/projects');
        this.firebaseCallbackProjects = firebase.database().ref('/projects').orderByChild("order").on('value', (snap) => {
            let data = [];
            snap.forEach((childSnap) => { data.push(childSnap.val()) })
            this.setState({ projects: data });
        });
    }

    setCat(category) {
        this.setState({ category: category });
    }

    render() {
        let images = [];
        this.state.projects.forEach(elem => {
            if(this.state.category === "" || elem.category === this.state.category)
                images.push({
                    src: elem.mainImage || elem.images[0],
                    url: "/projects/" + elem.id,
                    title: elem.title,
                    subtitle: elem.subtitle
                })
        })

        let baseClass = "btn transition-3d-hover m-2 px-4";
        let classBtn = baseClass + " btn-outline-secondary";
        let activeBtn = baseClass + " btn-primary";

        return (
            <Switch>
                <Route path="/projects/:projectId" component={Project} />
                <Route exact path="/projects" render={ () =>
                    <div>
                        <ContainerTitle title="Projects">
                            <div className="d-flex flex-column flex-md-row justify-content-center mx-auto py-3">
                                {this.state.categories.map((item, index) => (
                                    <button key={index} onClick={() => this.setCat(item.category)} className={(this.state.category === item.category ? activeBtn : classBtn)}>
                                        {item.title}
                                    </button>
                                ))}
                            </div>

                            <div className="row">
                                { images.map((item, index) => (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-2" key={index}>
                                        <Link to={item.url} className="a-unstyled">
                                            <div className="transition-3d-hover p-3 rounded">
                                                <ImageWithLoader src={item.src} className="img-fluid projects-img rounded" alt={item.title} style={{maxHeight: 400}} />
                                                <div className="text-center pt-3">
                                                    <h4 className="h6 text-dark mb-0">{item.title}</h4>
                                                    <p className="small mb-0">{item.subtitle}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )) }
                            </div>
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