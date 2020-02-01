import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Navbar extends Component {
    render() {
        return (
            <div>
                This will be the navbar
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Navbar);