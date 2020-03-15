import React, { useEffect, useRef } from 'react';
import debounce from '../helpers/debounce';
import { NavLink, Link }from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';
// Material-UI Componenets and styling
import { withStyles } from '@material-ui/styles';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import styles from './styles/Navbar.style'; 
import MenuController from './MenuController';
import { closeMenu } from '../actions/index';

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
    const navRef = useRef()

    useEffect(() => {

      // Add initial padding and add event listener for future resize events
      // should they occur
      addBodyTopPadding();
      window.addEventListener('resize', debounce(() => {
        addBodyTopPadding();
      }, 500))
    });

    const addBodyTopPadding = () => {
      let navHeight = navRef.current.clientHeight;
      document.body.style.paddingTop = `${navHeight - 5}px`;
    }

    return (
        <HideOnScroll {...props}>
            <AppBar component={"nav"} className={classes.root} ref={navRef}>
                <Link to="/" className={classes.logo}>
                    {/* <DeveloperModeIcon /> */}
                    <span className={classes.logoText}>
                      MALINIAK.<span className={classes.logoTextIO}>IO</span>
                    </span>
                </Link>
                <div 
                  className={classnames(
                      classes.navContainer, 
                      {[classes.navContainerOpen]: props.menuOpen}
                  )}
                >
                  <NavLink 
                    exact to={'/'} 
                    className={classes.link} activeClassName={classes.linkActive} 
                    onClick={props.closeMenu}
                  >
                    home
                  </NavLink>
                  <NavLink 
                    to={'/projects'} 
                    className={classes.link} 
                    activeClassName={classes.linkActive} 
                    onClick={props.closeMenu}>
                      projects
                  </NavLink>
                  <NavLink 
                    to={'/skills'} 
                    className={classes.link} 
                    activeClassName={classes.linkActive} 
                    onClick={props.closeMenu}>
                      skills
                  </NavLink>
                  <NavLink 
                    to={'/contact'} 
                    className={classes.link} 
                    activeClassName={classes.linkActive} 
                    onClick={props.closeMenu}>
                      contact
                  </NavLink>
                </div>
                <span className={classes.menuController}>
                  <MenuController />
                </span>
            </AppBar>
        </HideOnScroll>
    );
}

const mapStateToProps = state => ({
  menuOpen: state.menuOpen
})

export default connect(mapStateToProps, { closeMenu })(withStyles(styles)(NavBar));