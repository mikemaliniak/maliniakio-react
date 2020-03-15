import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hero from './Hero';

class Project extends Component {
    render() {
        const { projects } = this.props;
        const routeName = this.props.match.params.name
        const currProject = projects.find(project => project.name === routeName);
        if (currProject) {
            return (
                <div>
                    <Hero customStyles={ { 
                        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${currProject.name}.png)`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: '#ffe300'}
                        } />
                    <div>
                        <h1>{currProject.name}</h1>
                    </div>
                </div>
            )
        } else {
            return <h1>No Bueno</h1>
        }
    }
}

const mapStateToProps = state => ({
    projects: state.projects
});

export default connect(mapStateToProps)(Project);