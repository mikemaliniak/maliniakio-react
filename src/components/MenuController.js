import React from 'react';
// Material-UI Componenets and styling
import { withStyles } from '@material-ui/styles';
import styles from './styles/MenuController.style';
import classnames from 'classnames';
// Redux + Actions
import { connect } from 'react-redux';
import { toggleMenu } from '../actions';

function MenuController(props) {
    const { classes } = props;
    const menuClasses = classnames({
        [classes.root]: true,
        [classes.menuOpen]: props.menuOpen
    })
    return (
        <div className={menuClasses} onClick={props.menuAction}>
            whats ius
            {props.children}
            {/* <span></span>
            <span></span>
            <span></span> */}
        </div>
    )
}

const mapStateToProps = state => ({
    menuOpen: state.menuOpen
})

export default connect(mapStateToProps)(withStyles(styles)(MenuController));
