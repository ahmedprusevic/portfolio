import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_PROJECTS,
    PROJECTS_ERROR
} from './types';

//Get project

export const getAllProjects = () => async dispatch => {
        try {
            const res = await axios.get('api/projects');
            dispatch({
                type: GET_PROJECTS,
                payload: res.data
            });
        } catch(err) {
            dispatch({
                type: PROJECTS_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            });
        }
}


//Create or update project 

export const createProject = (formData, history, edit = false) => async dispatch => {
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('/api/projects', formData, config);
        
        dispatch(setAlert(edit ? 'Project updated' : 'Project Created'));

        dispatch({
            type: GET_PROJECTS,
            payload: res.data
        });

        const res2 = await axios.get('api/projects');

        dispatch({
            type: GET_PROJECTS,
            payload: res2.data
        });

        if(!edit) {
            history.push("/");
        }

    } catch(err){
        const errors = err.response.data.errors;
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg)));
        }
        dispatch({
            type: PROJECTS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
} 