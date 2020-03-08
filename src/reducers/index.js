import { combineReducers } from 'redux';
import projects from './projects';
import menuOpen from './menuOpen';

export default combineReducers({
    projects,
    menuOpen
});