import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles/ProjectCard.style';
import Tag from './Tag';
import { v4 as uuidv4 } from 'uuid';

const useStyles = (obj) => {
    return  makeStyles(obj);
}

const renderDescription = raw => {
    if(!raw) return null;
    let descArray = raw.split("\n");
    return descArray.map(p => {
        const key = uuidv4();
        return <p key={key}>{p}</p>
    });
}

const renderTags = (tags) => {
    if(!tags) return null;
    return tags.sort().map(tag => <Tag key={tag} type={tag}/>)
}

const ProjectCard = (props) => {
    const { name, description, tags, extension, title } = props;
    const nameFormatted = name.replace(" ", "").toLowerCase();
    const classes = useStyles(styles(name))();
    const imgExtension = extension ? extension : 'jpg';

    return (
        <div className={classes.root} >
            <div className={classes.imgContainer}>
                <img src={process.env.PUBLIC_URL + `/assets/images/${nameFormatted}.${imgExtension}`} alt={name} className={classes.img}/>
            </div>
            <div className={classes.textContainer}>
                <h3 className={classes.title}>{title}</h3>
                {renderTags(tags)}
                {renderDescription(description)}
            </div>
        </div>
    )
}

export default ProjectCard;