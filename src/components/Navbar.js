import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink to="/projects" activeClassName="is-active">Projects</NavLink>
                <NavLink to="/skills" activeClassName="is-active">Skills</NavLink>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Navbar);