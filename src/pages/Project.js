import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import ContainerTitle from '../components/ui/ContainerTitle';
import Gallery from '../components/images/Gallery';

import firebase from '../api/firebase';
import ButtonSubmit from '../components/ui/ButtonSubmit';

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
            if (snap.val())
                snap.forEach((childSnap) => this.setState({
                    project: childSnap.val()
                }));
            else
                this.setState({ project: null });
        });
    }

    createDescription = (description) => {
        let descRender = []

        description.forEach(elem => descRender.push(<p className="text-justify">{elem}</p>))

        return descRender
    }
 
    render() {
        const project = this.state.project;

        console.log(project);

        if(!project)
            return <Redirect to="/projects" />

        let images = []
        if(project.images)
            project.images.forEach(img => images.push({ src: img }));

        return (
            <ContainerTitle title={project.title} subtitle={project.category}>
                <h3>{project.subtitle}</h3>
                <p className="lead mb-4">
                    { project.description && this.createDescription(project.description)}
                </p>

                { project.link && 
                    <a href={project.link} target="_blank">
                        <ButtonSubmit type="button">
                            Visit website <FontAwesomeIcon icon={["fas", "external-link-alt"]} size="sm" className="ml-2" />
                        </ButtonSubmit>
                    </a>
                }

                <div className="row mt-4">
                    <Gallery data={images} />
                </div>
            </ContainerTitle>
        )
    }
}

export default withRouter(Project);