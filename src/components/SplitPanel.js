import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
// Styles
import { withStyles } from '@material-ui/styles';
import styles from './styles/SplitPanel.style'; 


const SplitPanel = (props) => {
    const { classes } = props;
    return ( 
        <section className={
            clsx(classes.wrapper, 'l__wrapper--split')
        }>
            <div className={clsx(classes.SplitPanelOuterLeft, 'l__container--split')}>
                <div className={classes.SplitPanelInnerLeft}>
                    <div>
                    <h2>About me</h2>
                    <p><span className={classes.highLight}>Hi, My name is Mike and I'm a Front End... Front-end... Frontend Developer.</span></p>
                    <p> Have been working as a commercial frontend developer for the last several years, consistently expanding knowledge into full-stack domains, particular involving the MERN stack</p>
                    <p>Feel free to have a browse of my portfolio site where you'll find some of the <Link to='/projects' className={classes.link}>projects</Link> I've worked on, as well as some of the <Link to='/skills' className={classes.link}>skills &amp; tools</Link> I use day to day.</p>
                    <p>You can also get in touch <Link to='/contact' className={classes.link}>here</Link>.</p>
                    </div>
                </div>
            </div>
            <div 
                className={clsx(classes.SplitPanelOuterRight, 'l__container--split')} >
                    <img src={process.env.PUBLIC_URL + '/assets/images/mike-meditate.jpg'} alt="Mike Maliniak - React, Webpack, NodeJS, HTML5, VueJS, ES6, SASS, CSS3"/>
                </div>
        </section>
     );
}
 
export default withStyles(styles)(SplitPanel);