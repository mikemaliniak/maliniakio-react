import { GET_PROJECTS } from '../actions/types';

const intialState = [];

export default function(state = intialState, action) {
    const { type, payload } = action;
    switch(type) {
        case GET_PROJECTS:
            return [...state, payload]
        default:
            return state;
    }
}