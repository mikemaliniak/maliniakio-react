import React from 'react';
import classNames from 'classnames';
// Styles
import { withStyles } from '@material-ui/styles';
import styles from './styles/ContentPanel.style'; 

const ContentPanel = (props) => {
    const { classes } = props;
    return ( 
        <section className="l-wrapper">
            <div className={classNames(classes.root, 'l__container')}>
                <div className={classNames(classes.col, classes.textOuter)}>
                    <div className={classes.textInner}>
                        <h2>About me</h2>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. </p>
                        <p>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.</p>
                    </div>
                </div>
                <div className={classes.col}>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. </p>
                    <img src={process.env.PUBLIC_URL + '/assets/svg/logo.svg'} alt=""/>
                </div>
            </div>
        </section>
     );
}
 
export default withStyles(styles)(ContentPanel);