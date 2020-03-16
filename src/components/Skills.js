import React, { Fragment } from 'react';
import BlankPanel from './BlankPanel';
import Hero from './Hero';

const Skills = () => {
        const inlineStyles = {
            backgroundColor: '#0169CA',
            backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/skills.jpg'})`,
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
        }
        return (
            <Fragment>
                <Hero customStyles={inlineStyles} mainTitle={"Skills"}/>
                <BlankPanel>
                    <div>
                        <h1 style={{fontWeight: 200}}>Skills pay the bills..</h1>
                        <p>...more to come</p>
                    </div>
                </BlankPanel>
            </Fragment>
        );
}

export default Skills;