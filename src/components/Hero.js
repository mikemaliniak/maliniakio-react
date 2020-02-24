import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hero extends Component {
    render () {
        const {subTitle, mainTitle} = this.props;
        return ( 
                <section className="hero__wrapper l-wrapper">
                    <div className="hero__overlay"></div>
                    <h1 className="hero__title">
                        <span className="hero__title--sub">{subTitle}</span>
                        <span className="hero__title--main">{mainTitle}</span>
                    </h1>
                </section>
            )
        }
    }   

Hero.propTypes = {
    subTitle: PropTypes.string,
    mainTitle: PropTypes.string,
}
 
export default Hero;