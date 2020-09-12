import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import projects from './projects';
import skills from './skills';

export default combineReducers({
    alert,
    auth,
    projects,
    skills
});