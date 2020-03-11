import { TOGGLE_MENU, OPEN_MENU, CLOSE_MENU } from '../actions/types';

const intialState = false;

export default function(state = intialState, action) {
    const { type } = action;
    switch(type) {
        case TOGGLE_MENU:
            return !state;
        case OPEN_MENU:
            return true;
        case CLOSE_MENU:
            return false;
        default:
            return state;
    }
}