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
            <nav>
                <NavLink to="/projects" activeClassName="is-active">Projects</NavLink>
                <NavLink to="/skills" activeClassName="is-active">Skills</NavLink>
            </nav>
        );
    }
}

export default connect(
    mapStateToProps,
)(Navbar);