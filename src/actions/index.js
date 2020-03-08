import { GET_PROJECTS, TOGGLE_MENU } from './types';
import projects from '../data/projects';


// GET PROJECTS
export const getProjects = () => dispatch => {
    dispatch({
        type: GET_PROJECTS,
        payload: projects
    });
}

// TOGGLE MENU
export const toggleMenu = () => dispatch => {
    dispatch({
        type: TOGGLE_MENU,
    });
}