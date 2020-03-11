import React from 'react';
import { NavLink, Link }from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Material-UI Componenets and styling
import { withStyles } from '@material-ui/styles';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from './styles/Navbar.style'; 
import MenuController from './MenuController';
import { openMenu, closeMenu } from '../actions';


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
    const { classes, menuOpen } = props;
    return (
        <HideOnScroll {...props}>
            <AppBar component={"nav"} className={classes.root}>
                <Link to="/" className={classes.logo}>
                    <DeveloperModeIcon />
                    <span className={classes.logoText}></span>MALINIAK.IO</Link>
                <div className={classes.linkContainer}>
                    <NavLink exact to={'/'} className={classes.link} activeClassName={classes.linkActive} onClick={props.closeMenu}>home</NavLink>
                    <NavLink to={'/projects'} className={classes.link} activeClassName={classes.linkActive} onClick={props.closeMenu}>projects</NavLink>
                    <NavLink to={'/skills'} className={classes.link} activeClassName={classes.linkActive} onClick={props.closeMenu}>skills</NavLink>
                    { menuOpen && (<MenuController menuAction={props.closeMenu}><CloseIcon /></ MenuController>)}
                </div>
                <a href="https://github.com/mikemaliniak" target="_blank">
                    <GitHubIcon />
                </a>
                <MenuController menuAction={props.openMenu}>
                  <MenuIcon />
                </ MenuController>
            </AppBar>
        </HideOnScroll>
    );
}

const mapStateToProps = state => ({
  menuOpen: state.menuOpen
})

export default connect(mapStateToProps, { openMenu, closeMenu })(withStyles(styles)(NavBar));