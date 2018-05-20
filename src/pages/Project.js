import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import ContainerTitle from '../components/ui/ContainerTitle';
import Gallery from '../components/images/Gallery';

import { ProjectsData } from '../api/ProjectsData';

const Project = ({ match }) => {

    const projectId = match.params.projectId;
    const project = ProjectsData.find(project => project.id === projectId);

    if(!project)
        return <Redirect to="/projects" />

    return (
        <ContainerTitle title={"Project " + projectId}>
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
};

export default withRouter(Project);