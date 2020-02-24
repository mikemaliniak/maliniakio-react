import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../assets/svg/logo.svg';
// Components
import Hero from './Hero';

class Home extends Component {
    render() {
        const heroProps = {
            mainTitle: "success",
            subTitle: "ambition is the first step towards"
        }
        return (
            <div>
                <Hero subTitle={"asdfm"} mainTitle={"Mike"} />
                <section className="l-wrapper">
                    <div className="l__container content-panel__wrapper">
                        <div className="content-panel__col content-panel__col--text-outer">
                            <div className="content-panel__col--text-inner">
                                <h2>About me</h2>
                                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. </p>
                                <p>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.</p>
                            </div>
                        </div>
                        <div className="content-panel__col">
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. </p>
                            <img src={logo} alt=""/>
                        </div>
                    </div>
                </section>
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