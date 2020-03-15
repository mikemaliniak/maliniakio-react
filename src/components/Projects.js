import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlankPanel from './BlankPanel';
import ProjectCard from './ProjectCard';

class Projects extends Component {
    render() {
        const { projects } = this.props;
        return (
            <div>
                <BlankPanel>
                    <div>
                        <h1 style={{fontWeight: 200}}>Some stuff that I've done..</h1>
                            {projects.map(project => <small key={project.id}>| {project.name} |</small>)}
                            <p>...more to come</p>
                    </div>
                </BlankPanel>
                {/* <section>
                    {projects.map(project => (
                        <ProjectCard 
                            key={project.id}
                            name={project.name}
                        />
                    ))}
                </section> */}
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