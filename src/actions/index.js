import { 
    GET_PROJECTS,
    TOGGLE_MENU,
    OPEN_MENU,
    CLOSE_MENU
} from './types';

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

// OPEN MENU
export const openMenu = () => dispatch => {
    dispatch({
        type: OPEN_MENU,
    });
}

// CLOSE MENU
export const closeMenu = () => dispatch => {
    dispatch({
        type: CLOSE_MENU,
    });
}