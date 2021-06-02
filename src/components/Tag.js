import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles';
import styles from './styles/Tag.style';

const Tag = (props) => {
    const { type, classes } = props;
    return (
        <small 
            key={type} 
            className={clsx(
                classes.root,
                classes[type]
            )}>
            {type}
        </small>
    )
}

export default withStyles(styles)(Tag);