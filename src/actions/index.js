import { GET_PROJECTS } from './types';
import projects from '../data/projects';


// GET PROJECTS
export const getProjects = () => dispatch => {
    dispatch({
        type: GET_PROJECTS,
        payload: projects
    });
}