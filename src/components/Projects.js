import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectCard from './ProjectCard';

class Projects extends Component {
    render() {
        const { projects } = this.props;
        return (
            <div>
                {projects.map(project => (
                    <ProjectCard 
                        key={project.id}
                        name={project.name}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
        projects: state.projects
});

export default connect(
    mapStateToProps
)(Projects);