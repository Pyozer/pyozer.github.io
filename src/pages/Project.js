import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import ContainerTitle from '../components/ui/ContainerTitle';
import Gallery from '../components/images/Gallery';

import { ProjectsData } from '../api/ProjectsData';
import firebase from '../api/firebase';

class Project extends React.Component {
    
    projectId = "unknown";
    state = {
        project: {}
    }

    constructor(props) {
        super(props);
        this.projectId = props.match.params.projectId;
    }

    componentWillMount() {
        this.firebaseRefProjects = firebase.database().ref('/projects/');
        this.firebaseCallbackProjects = this.firebaseRefProjects.orderByChild("id").equalTo(this.projectId).on('value', (snap) => {
            if(snap.val())
                snap.forEach((childSnap) => this.setState({ project: childSnap.val() }) );
            else
                this.setState({ project: null });
        });
    }
 
    render() {
        const project = this.state.project;

        if(!project)
            return <Redirect to="/projects" />

        return (
            <ContainerTitle title={"Project " + this.projectId}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Gallery elems={project.images} colItemClass="col-12 col-sm-6 py-2" />
                    </div>
                    <div className="col-12 col-md-6">
                    
                    </div>
                </div>
                <h3>Project name: {project.title}</h3>
                <h4>{project.subtitle}</h4>
                <p>{project.description}</p>

            </ContainerTitle>
        )
    }
}

export default withRouter(Project);