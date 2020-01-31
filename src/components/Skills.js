import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Skills extends Component {
    render() {
        return (
            <div>
                Skills
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Skills);