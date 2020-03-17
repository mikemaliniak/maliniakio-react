import { 
    GET_PROJECTS,
    TOGGLE_MENU,
    OPEN_MENU,
    CLOSE_MENU
} from './types';

import projects from '../data';


// GET PROJECTS
export const getProjects = () => dispatch => {
    dispatch({
        type: GET_PROJECTS,
        payload: projects
    });
}

// TOGGLE MENU
export const toggleMenu = () => dispatch => {
    document.body.classList.toggle('navOpen');
    dispatch({
        type: TOGGLE_MENU,
    });
}

// OPEN MENU
export const openMenu = () => dispatch => {
    document.body.classList.add('navOpen');
    dispatch({
        type: OPEN_MENU,
    });
}

// CLOSE MENU
export const closeMenu = () => dispatch => {
    document.body.classList.remove('navOpen');
    dispatch({
        type: CLOSE_MENU,
    });
}