import React from 'react';
import { withStyles } from '@material-ui/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BlankPanel from './BlankPanel';
import { theme } from './styles/Theme.style';
import styles from './styles/Footer.style';

const Footer = props => {
    const { classes } = props
    const overrideStyles = {
        backgroundColor: theme.custom.grey
    }
    return (
        <BlankPanel overrides={overrideStyles}>
            <footer className={classes.root}>
                <a href="https://github.com/mikemaliniak" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                <a href="https://github.com/mikemaliniak" target="_blank" rel="noopener noreferrer"><MailOutlineIcon /></a>
                <a href="https://github.com/mikemaliniak" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
            </footer>
        </BlankPanel>
    );
}
 
export default withStyles(styles)(Footer);