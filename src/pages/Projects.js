import React, { Component } from 'react';
import ContainerTitle from '../components/ui/ContainerTitle';
import Gallery from '../components/images/Gallery';
import { withTitle } from '../Context';

var projects = [
    { img: "https://htmlstream.com/preview/front-v1.1/assets/img/380x360/img29.jpg", title: "Projet 1", subtitle: "Description courte", category: "web" },
    { img: "https://htmlstream.com/preview/front-v1.1/assets/img/380x360/img6.jpg", title: "Projet 2", subtitle: "Description courte", category: "web" },
    { img: "https://htmlstream.com/preview/front-v1.1/assets/img/380x360/img1.jpg", title: "Projet 3", subtitle: "Description courte", category: "web" },

    { img: "https://htmlstream.com/preview/front-v1.1/assets/img/380x360/img30.jpg", title: "Projet 4", subtitle: "Description courte", category: "android" },
    { img: "https://htmlstream.com/preview/front-v1.1/assets/img/380x360/img26.jpg", title: "Projet 5", subtitle: "Description courte", category: "android" },
    { img: "https://htmlstream.com/preview/front-v1.1/assets/img/380x360/img2.jpg", title: "Projet 6", subtitle: "Description courte", category: "android" }

];

var buttonsCat = [
    { title: "All", category: "" },
    { title: "Web", category: "web" },
    { title: "Android", category: "android" },
    { title: "iOS", category: "ios" },
    { title: "Logiciel", category: "software" },
];

class Projects extends Component {
    
    render() {
        return (
            <ContainerTitle title="Projects">
                <Gallery elems={projects} buttons={buttonsCat} />
            </ContainerTitle>
        );
    }
}

export default withTitle(Projects, "Projects");