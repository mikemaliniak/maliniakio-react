import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlankPanel from './BlankPanel';
import ProjectCard from './ProjectCard';
import { theme } from './styles/Theme.style';

class Projects extends Component {
    render() {
        const { projects } = this.props;
        return (
            <div>
                <BlankPanel>
                    <div>
                        <h1 style={{fontWeight: 200, textAlign: 'center'}}>Some things I built, or helped build</h1>
                    </div>
                </BlankPanel>
                <BlankPanel overrides={{backgroundColor: theme.custom.triad }}>
                    {projects.map(project => (
                        <ProjectCard 
                            key={project.id}
                            {...project}
                        />
                    ))}
                </BlankPanel>
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