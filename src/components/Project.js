import React, { Component } from 'react';
import { connect } from 'react-redux';

class Project extends Component {
    render() {
        const { projects } = this.props;
        const routeName = this.props.match.params.name
        const currProject = projects.find(project => project.name === routeName);
        if (currProject) {
            return <h1>{currProject.name}</h1>
        } else {
            return <h1>No Bueno</h1>
        }
    }
}

const mapStateToProps = state => ({
    projects: state.projects
});

export default connect(mapStateToProps)(Project);