import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ContainerTitle from '../components/ui/ContainerTitle';
import Gallery from '../components/images/Gallery';
import GitHubContribution from '../components/images/GitHubContribution';

import Project from './Project';

import { withTitle } from '../Context';
import { ProjectsData, ProjectsCategory } from '../api/ProjectsData';

const Projects = ({ match }) => (
    <Switch>
        <Route path="/projects/:projectId" component={Project} />
        <Route exact path="/projects" render={ () =>
            <div>
                <ContainerTitle title="Projects">
                    <Gallery elems={ProjectsData} buttons={ProjectsCategory} baseUrl="/projects/" colItemClass="col-12 col-sm-6 col-md-4 col-lg-3" />
                </ContainerTitle>
                <ContainerTitle title="Activity">
                    <GitHubContribution username="Pyozer" theme="standard"/>
                </ContainerTitle>
            </div>
        } />
    </Switch>
);

export default withTitle(Projects, "Projects");