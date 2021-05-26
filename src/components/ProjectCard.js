import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles/ProjectCard.style';

const useStyles = (obj) => {
    return  makeStyles(obj);
}

const ProjectCard = (props) => {
    const { name } = props;
    const classes = useStyles(styles(name))();
    return (
        <div className={classes.root}>
            <div className={classes.imgContainer}>
                <div className={classes.imgDiv}>
                <img src={process.env.PUBLIC_URL + `/assets/images/${name}.jpg`} alt={name} className={classes.img}/>
                </div>
            </div>
            <div>
                <h5 className={classes.title}>{name}</h5>
                <small>Lorem Ipsum doodem cuteim inst a verofld...</small>
            </div>
        </div>
    )
}

export default ProjectCard;