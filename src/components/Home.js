import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                    <img src={process.env.PUBLIC_URL + '/assets/images/image01.jpg'} />
                    <img src={process.env.PUBLIC_URL + '/assets/images/image02.webp'} />
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