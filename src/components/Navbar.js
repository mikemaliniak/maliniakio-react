import React, { Fragment } from 'react';
import { NavLink }from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
// Icons
import GitHubIcon from '@material-ui/icons/GitHub';

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

export default function HideAppBar(props) {
  return (
    <Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Scroll to Hide App Bar</Typography>
            <nav>
                <NavLink to={'/'}>home</NavLink>
                <NavLink to={'/projects'}>projects</NavLink>
                <NavLink to={'/skills'}>skills</NavLink>
                <a href="https://github.com/mikemaliniak" target="_blank">
                    <GitHubIcon />
                </a>
            </nav>

          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </Fragment>
  );
}