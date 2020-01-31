import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Projects extends Component {
    render() {
        return (
            <div>
                this is the projects component
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Projects);