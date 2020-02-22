import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../assets/svg/logo.svg';

function mapStateToProps(state) {
    return {

    };
}

class Home extends Component {
    render() {
        return (
            <div>
                <img src={logo} />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Home);