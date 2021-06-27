import React, { Fragment } from 'react';
// Components
import Hero from './Hero';
import SplitPanel from './SplitPanel';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/Home.style'; 

const Home = (props) => {
    const heroProps = {
        customStyles: {
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/mike.jpg)`
        }
    }
    const panelText = (
        <Fragment>
            <p><span className={props.classes.highLight}>Hi, My name is Mike and I am a Frontend, Front end... Front-end Developer.</span></p>
            <p>Have been working as a commercial frontend developer for just shy of a decade, consistently expanding knowledge into full-stack domains, particular involving the MERN stack</p>
            <p>Feel free to have a browse of my portfolio site where you'll find some of the <Link to='/projects' className={props.classes.link}>projects</Link> I've worked on, as well as some of the <Link to='/skills' className={props.classes.link}>skills &amp; tools</Link> I use day to day.</p>
            <p>You can also get in touch <Link to='/contact' className={props.classes.link}>here</Link>.</p>
        </Fragment>
    )
    return (
        <div>
            <Hero {...heroProps}/>
            <SplitPanel panelContentLeft={panelText} title="About me" showImage/>
        </div>
    );
}

export default withStyles(styles)(Home);