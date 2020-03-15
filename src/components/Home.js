import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Hero from './Hero';
import ContentPanel from './ContentPanel';

class Home extends Component {
    render() {
        const heroProps = {
            customStyles: {
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/mike.jpg)`
            }
        }
        return (
            <div>
                <Hero {...heroProps}/>
                <ContentPanel />
                <section>
                    <img src={process.env.PUBLIC_URL + '/assets/images/image01.jpg'} style={{width: '100%'}}/>
                    <img src={process.env.PUBLIC_URL + '/assets/images/image02.webp'} style={{width: '100%'}}/>
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