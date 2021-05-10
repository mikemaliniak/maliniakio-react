import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlankPanel from './BlankPanel';
import Hero from './Hero';
import ProjectCard from './ProjectCard';
import { theme } from './styles/Theme.style';

class Projects extends Component {
    render() {
        const { projects } = this.props;
        const inlineStyles = {
            backgroundColor: '#4FD4CF',
            backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/projects.jpg'})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
        }
        return (
            <div>
                <Hero customStyles={inlineStyles} mainTitle={"Projects"}/>
                <BlankPanel>
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