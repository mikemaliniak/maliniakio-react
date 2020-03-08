import { TOGGLE_MENU } from '../actions/types';

const intialState = false;

export default function(state = intialState, action) {
    const { type } = action;
    switch(type) {
        case TOGGLE_MENU:
            return !state;
        default:
            return state;
    }
}