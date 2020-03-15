import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectCard from './ProjectCard';

class Projects extends Component {
    render() {
        const { projects } = this.props;
        return (
            <div>
                <section>
                    {projects.map(project => (
                        <ProjectCard 
                            key={project.id}
                            name={project.name}
                        />
                    ))}
                </section>
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