import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlankPanel from './BlankPanel'

function mapStateToProps(state) {
    return {

    };
}

class Skills extends Component {
    render() {
        return (
            <BlankPanel>
                <div>
                    <h1 style={{fontWeight: 200}}>Skills pay the bills..</h1>
                    <p>...more to come</p>
                </div>
            </BlankPanel>
        );
    }
}

export default connect(
    mapStateToProps,
)(Skills);