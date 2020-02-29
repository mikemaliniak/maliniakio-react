import { GET_PROJECT } from '../actions/types';

const intialState = {};

export default function(state = intialState, action) {
    const { type, payload } = action;
    switch(type) {
        case GET_PROJECT:
            return [...state, payload]
        default:
            return state;
    }
}