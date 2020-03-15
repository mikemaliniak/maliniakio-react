import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Material-UI Componenets and styling
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';
import styles from './styles/Hero.style'; 

class Hero extends Component {
    render () {
        const {classes, subTitle, mainTitle, customStyles } = this.props;
        const heroClasses = clsx({
            [classes.root]: true,
            ['l__wrapper']: true
        });
        return ( 
                <section 
                    className={heroClasses} 
                    style={{...customStyles}}
                >
                    <div className={classes.overlay}></div>
                    <h1 className={classes.title}>
                        <span className={classes.titleSub}>{subTitle}</span>
                        <span className={classes.titleMain}>{mainTitle}</span>
                    </h1>
                </section>
            )
        }
    }   

Hero.propTypes = {
    subTitle: PropTypes.string,
    mainTitle: PropTypes.string,
}
 
export default withStyles(styles)(Hero);