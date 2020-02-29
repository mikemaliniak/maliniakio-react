import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ name }) => {
    return (
        <Link to={`/project/${name}`}>
            <h1>{name}</h1>
        </Link>
    )
}

export default ProjectCard