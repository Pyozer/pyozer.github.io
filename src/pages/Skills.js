import React, { Component } from 'react';
import { firebase } from '@firebase/app';
import ContainerTitle from '../components/ui/ContainerTitle';
import ImageWithLoader from '../components/ui/ImageWithLoader';
import { withTitle } from '../Context';


class Skills extends Component {

    state = { skills: {} }

    componentWillMount() {
        this.firebaseRefSkills = firebase.database().ref('/skills');
        this.firebaseCallbackSkills  = this.firebaseRefSkills.on('value', (snap) => {
            this.setState({ skills: snap.val() });
        });
    }

    componentWillUnMount() {
        this.firebaseRefSkills.off('value', this.firebaseCallbackSkills);
    }

    _renderSkills = (data) => {
        let skillsCategories = []
    
        for(let key in data)
            skillsCategories.push(<SkillCategory key={key} title={key} data={data[key]} />)
        
        return skillsCategories
    }

    render() {
        return (
            <ContainerTitle title="Skills">
                {this._renderSkills(this.state.skills) }
            </ContainerTitle>
        );
    }
}

const SkillCategory = ({title, data}) => (
    <div>
        <h3 className="my-5 text-capitalize">{title}</h3>
        <div className="row">
            { data.map((item, index) => (
                <SkillElement key={index} data={item} />
            ))}
        </div>
    </div>
);

const SkillElement = ({data}) => (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card border-0 text-center mb-5">
            <ImageWithLoader src={data.image} className="card-img-top" style={{width: 70}} />
            <div className="card-body">
                <h3 className="card-title mb-0">{data.name}</h3>
            </div>
            {data.percent && 
                <div className="card-footer bg-light p-0">
                    <div className="progress rounded-0" style={{height: 5}}>
                        <div className="progress-bar" role="progressbar" style={{width: data.percent + "%"}} aria-valuenow={data.percent} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            }
        </div>
    </div>
)

export default withTitle(Skills, "Skills");