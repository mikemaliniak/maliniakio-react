import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Hero from './Hero';
import BlankPanel from './BlankPanel';
import SplitPanel from './SplitPanel';

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
                <SplitPanel />
                {/* <BlankPanel>
                    <div>
                        <h1 style={{fontWeight: 200}}>Hi, My name is Mike and I'm a Frontend? Front-end? Front End? Developer</h1>
                        <p>...more to come</p>
                    </div>
                </BlankPanel> */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps,{})(Home);