import React from 'react';
import clsx from 'clsx';
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
                    <h2>About me</h2>
                    <p>Hi, My name is Mike and I'm a Frontend? Front-end? Front End? Developer. Commercial frontend developer for the last several years, consistently expanding knowledge in full-stack domains, particular involving MERN stack</p>
                    <p>Lots to do, lots to do...but better to "do it, do it better, do it best" - Placeholder text for now</p>
                </div>
            </div>
            <div 
                className={clsx(classes.SplitPanelOuterRight, 'l__container--split')} >
                    <img src={process.env.PUBLIC_URL + '/assets/images/frontend2.jpg'} alt=""/>
                </div>
        </section>
     );
}
 
export default withStyles(styles)(SplitPanel);