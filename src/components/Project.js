import React, { Component } from 'react';

class Project extends Component {
    render() {
        return (
            <div>
                Individual project: {this.props.match.params.id}
            </div>
        );
    }
}

export default Project;