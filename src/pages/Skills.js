import React, { Component } from 'react';
import { firebase } from '@firebase/app';
import ContainerTitle from '../components/ui/ContainerTitle';
import ImageWithLoader from '../components/ui/ImageWithLoader';
import { withTitle } from '../Context';


class Skills extends Component {

    state = { skills: [] }

    componentWillMount() {
        this.firebaseRefSkills = firebase.database().ref('/skills');
        this.firebaseCallbackSkills  = this.firebaseRefSkills.orderByChild('order').on('value', (snap) => {
            let data = [];
            snap.forEach((childSnap) => {
                data.push(childSnap.val())
            })
            this.setState({ skills: data });
        });
    }

    /*componentWillUnMount() {
        this.firebaseRefSkills.off('value', this.firebaseCallbackSkills);
    }*/

    render() {
        return (
            <ContainerTitle title="Skills">
                { this.state.skills.map((item, index) => (
                    <SkillCategory key={index} title={item.title} data={item.items} />
                )) }
            </ContainerTitle>
        );
    }
}

const SkillCategory = ({title, data}) => {
    data.sort((a, b) => (b.percent - a.percent));
    return (
        <div>
            <h3 className="mt-5 mb-4 text-capitalize">{title}</h3>
            <div className="row">
                { data.map((item, index) => (
                    <SkillElement key={index} data={item} />
                ))}
            </div>
        </div>
    )
};

const SkillElement = ({data}) => (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card text-center mb-4">
            <div className="card-body shadow-sm transition-3d-hover">
                <ImageWithLoader src={data.image} className="card-img-top img-fluid" style={{width: "auto", maxWidth: "60%", maxHeight: 80}} />
                {data.percent && 
                    <div className="progress mt-3 mx-1 mx-sm-2" style={{height: 5}}>
                        <div className="progress-bar" role="progressbar" style={{width: data.percent + "%"}} aria-valuenow={data.percent} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                }
                <h4 className="card-title font-weight-bold lead mt-3 mb-0">{data.name}</h4>
            </div>
        </div>
    </div>
)

export default withTitle(Skills, "Skills");