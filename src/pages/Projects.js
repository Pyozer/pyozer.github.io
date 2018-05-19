import React, { Component } from 'react';
import ContainerTitle from '../components/ui/ContainerTitle';
import { withTitle } from '../Context';

var projects = [
    { img: "https://htmlstream.com/preview/front-v1.1/assets/img/380x360/img29.jpg", title: "Projet 1", subtitle: "Description courte", category: "web" },
    { img: "https://htmlstream.com/preview/front-v1.1/assets/img/380x360/img6.jpg", title: "Projet 2", subtitle: "Description courte", category: "web" },
    { img: "https://htmlstream.com/preview/front-v1.1/assets/img/380x360/img1.jpg", title: "Projet 3", subtitle: "Description courte", category: "web" },

    { img: "https://htmlstream.com/preview/front-v1.1/assets/img/380x360/img30.jpg", title: "Projet 4", subtitle: "Description courte", category: "android" },
    { img: "https://htmlstream.com/preview/front-v1.1/assets/img/380x360/img26.jpg", title: "Projet 5", subtitle: "Description courte", category: "android" },
    { img: "https://htmlstream.com/preview/front-v1.1/assets/img/380x360/img2.jpg", title: "Projet 6", subtitle: "Description courte", category: "android" }

];

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {elems: projects, category: "all"};
    }

    toggleCategory(newCategory) {
        this.setState({ category: newCategory })
    }

    render() {
        let baseClass = "btn transition-3d-hover mx-3 px-5";
        let classBtn = baseClass + " btn-outline-primary";
        let activeBtn = baseClass + " btn-primary";

        let category = this.state.category;
        return (
            <ContainerTitle title="Projects">
                <div className="flex-column flex-sm-row justify-content-center w-50 mx-auto py-3">
                    <button onClick={(e) => this.toggleCategory("all")} className={(category === "all" ? activeBtn : classBtn)}>All</button>
                    <button onClick={(e) => this.toggleCategory("web")} className={(category === "web" ? activeBtn : classBtn)}>Web</button>
                    <button onClick={(e) => this.toggleCategory("android")} className={(category === "android" ? activeBtn : classBtn)}>Android</button>
                </div>
                <div className="row">
                    {this.state.elems.map((item, index) => {
                        if(category === "all" || category === item.category)
                            return (
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-2">
                                    <img src={item.img} className="rounded img-fluid" />
                                    <div className="py-3">
                                        <h4 className="h6 text-dark mb-0">{item.title}</h4>
                                        <p className="small mb-0">{item.subtitle}</p>
                                    </div>
                                </div>
                            )
                    })}
                </div>
            </ContainerTitle>
        );
    }
}

export default withTitle(Projects, "Projects");