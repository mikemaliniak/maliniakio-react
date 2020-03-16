import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ProjectCard.style';

const ProjectCard = (props) => {
    const { name, classes } = props;
    return (
        <Link to={`/project/${name}`} className={classes.root}>
            <div className={classes.imgContainer}>
                <div className={classes.imgDiv}>
                    <span>{name}</span>
                </div>
            </div>
            <h5>{name}</h5>
            <small>Lorem Ipsum doodem cuteim inst a verofld...</small>
        </Link>
    )
}

export default withStyles(styles)(ProjectCard);