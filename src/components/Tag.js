import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles';
import styles from './styles/Tag.style';

const Tag = (props) => {
    const { type, classes } = props;
    const formattedType = type.replace(" ", "").replace(/-/g, "").toLowerCase();
    return (
        <small 
            key={type} 
            className={clsx(
                classes.root,
                classes[formattedType]
            )}>
            {type}
        </small>
    )
}

export default withStyles(styles)(Tag);