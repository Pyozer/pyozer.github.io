import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';

import ContainerTitle from '../components/ui/ContainerTitle';
import ButtonSubmit from '../components/ui/ButtonSubmit';
import ImageWithLoader from '../components/ui/ImageWithLoader';

import firebase from '../api/firebase';

class Project extends React.Component {
    
    projectId = "-1";
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
                snap.forEach((childSnap) => this.setState({ project: childSnap.val() }));
            else
                this.setState({ project: null });
        });
    }

    createDescription = (description) => {
        let descRender = []
        description.forEach((elem, index) => descRender.push(<p className="text-justify" key={index}>{elem}</p>))

        return descRender
    }
 
    render() {
        const project = this.state.project;

        if(!project)
            return <Redirect to="/projects" />

        let images = []
        if(project.images)
            project.images.forEach(img => images.push({ src: img }));

        return (
            <ContainerTitle title={project.title} subtitle={project.category}>
                <h3>{project.subtitle}</h3>
                <div className="lead mt-3 mb-4">
                    { project.description && this.createDescription(project.description)}
                </div>

                { project.link && 
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ButtonSubmit type="button">
                            More info <FontAwesomeIcon icon={["fas", "external-link-alt"]} size="sm" className="ml-2" />
                        </ButtonSubmit>
                    </a>
                }

                <div className="row mt-4">
                    <div className="d-flex flex-wrap justify-content-center">
                        { images.map((item, index) => (
                            <ImageWithLoader src={item.src} className="img-fluid transition-3d-hover m-3" alt={item.title} style={{maxHeight: 470}} key={index} />
                        )) }
                    </div>
                </div>
            </ContainerTitle>
        )
    }
}

export default withRouter(Project);