import React from 'react';
import clsx from 'clsx';
// Styles
import { withStyles } from '@material-ui/styles';
import styles from './styles/SplitPanel.style'; 


const SplitPanel = (props) => {
    const { classes, showImage } = props;
    const renderImage = () => {
        return (
            <div 
                className={clsx(classes.SplitPanelOuterRight, 'l__container--split')} >
                    <img src={process.env.PUBLIC_URL + '/assets/images/mike-meditate.jpg'} alt="Mike Maliniak - React, Webpack, NodeJS, HTML5, VueJS, ES6, SASS, CSS3"/>
            </div>
        )
    }
    return ( 
        <section className={
            clsx(classes.wrapper, 'l__wrapper--split')
        }>
            <div className={clsx(classes.SplitPanelOuterLeft, 'l__container--split')}>
                <div className={classes.SplitPanelInnerLeft}>
                    <div>
                        <h2>{props.title}</h2>
                        {props.panelContentLeft}
                    </div>
                </div>
            </div>
            {showImage && renderImage()}
        </section>
     );
}
 
export default withStyles(styles)(SplitPanel);