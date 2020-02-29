import { GET_PROJECTS } from '../actions/types';
import projects from '../data/projects';

export default function(state = projects, action) {
    const { type, payload } = action;
    switch(type) {
        case GET_PROJECTS:
            return [...state, payload]
        default:
            return state;
    }
}