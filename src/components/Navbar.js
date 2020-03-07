import React from 'react';
import { NavLink }from 'react-router-dom';
import PropTypes from 'prop-types';
// Material-UI Componenets and styling
import { withStyles } from '@material-ui/styles'; 
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from './styles/NavBar'; 

function HideOnScroll(props) {
  const { children } = props;
  // Don't need to set the window ref as useScrollTrigger
  // will default to window.
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function NavBar(props) {
    const { classes } = props;
    return (
        <HideOnScroll {...props}>
            <AppBar component={"nav"} className={classes.root}>
                <NavLink to={'/'}>home</NavLink>
                <NavLink to={'/projects'}>projects</NavLink>
                <NavLink to={'/skills'}>skills</NavLink>
                <a href="https://github.com/mikemaliniak" target="_blank">
                    <GitHubIcon />
                </a>
            </AppBar>
        </HideOnScroll>
    );
}

export default withStyles(styles)(NavBar);