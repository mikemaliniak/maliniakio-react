import React from 'react';
import { connect } from 'react-redux';
// Components
import Hero from './Hero';
import SplitPanel from './SplitPanel';

const Contact = () => {
    const heroProps = {
        customStyles: {
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/contact.jpeg)`
        }
    }
    const panelText = (
        <p>If you wish to get in touch you can contact me via email <a href="mailto:mike@maliniak.io" target="blank">here</a></p>
    )
    return (
        <div>
            <Hero {...heroProps} mainTitle={"Contact"}/>
            <SplitPanel 
                panelContentLeft={panelText}
                title="Get in touch..." 
            />
        </div>
    )
}

const mapStateToProps = state => ({
});

export default connect(
    mapStateToProps
)(Contact);