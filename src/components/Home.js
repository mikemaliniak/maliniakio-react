import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../assets/svg/logo.svg';
// Components
import Hero from './Hero';
import ContentPanel from './ContentPanel';

class Home extends Component {
    render() {
        const heroProps = {
            mainTitle: "success",
            subTitle: "ambition is the first step towards"
        }
        return (
            <div>
                <Hero {...heroProps} />
                <ContentPanel />
                <section>
                    how I can help
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps,{})(Home);