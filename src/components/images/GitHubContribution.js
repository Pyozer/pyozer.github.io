import React, { Component } from 'react';
import { drawContributions } from "github-contributions-canvas";
import { fetchData } from '../../api/GitHubContribution';

class GitHubContribution extends Component {
    canvas = null;

    constructor(props) {
        super(props);

        this.state = { loading: false, data: null, error: null};
    }

    componentWillMount() {
        this.loadData();
    }

    loadData() {
        this.setState({ loading: true, error: null });
        fetchData(this.props.username, (data, error) => {
            this.setState({ loading: false }); // Stop loader
            if(error) {
                return this.setState({ data: null, error: "I could not check your profile successfully..." }); // Set error request
            }
            if (data.years.length === 0) {
                return this.setState({ error: "Could not find your profile", data: null }); // Set error data
            }
            this.setState({ data: data, error: null }); // Set data
            this.draw();
        });
    }

    draw() {
        if (!this.canvas) {
            return this.setState({ error: "Something went wrong... Check back later." });
        }
        drawContributions(this.canvas, {
            data: this.state.data,
            username: this.props.username,
            themeName: this.props.theme || "standard",
            footerText: this.props.footerText || "Made by @sallar & friends - github-contributions.now.sh"
        });
    }

    render() {
        return (
            <div {...this.props}>
                {this.state.loading ? (
                    <p>Please wait, I'm visiting your profile...</p>
                ) : this.state.data !== null && this.state.error === null ? (
                    <canvas ref={el => (this.canvas = el)} />
                ) : (
                    <p>{this.state.error}</p>
                )}
            </div>
        );
    }
}

export default GitHubContribution;