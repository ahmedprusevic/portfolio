import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_PROJECTS,
    PROJECT_ERROR,
    DELETE_PROJECT
} from './types';


//Get projects

export const getAllProjects = () => async dispatch => {
        try {
            const res = await axios.get('api/projects');
            dispatch({
                type: GET_PROJECTS,
                payload: res.data
            });
        } catch(err) {
            dispatch({
                type: PROJECT_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            });
        }
}


//Create project 

export const createProject = (formData, history) => async dispatch => {
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('/api/projects', formData, config);
        
        dispatch(setAlert('Project Created'));

        dispatch({
            type: GET_PROJECTS,
            payload: res.data
        });

        const res2 = await axios.get('api/projects');

        dispatch({
            type: GET_PROJECTS,
            payload: res2.data
        });

        history.push("/");

    } catch(err){
        const errors = err.response.data.errors;
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg)));
        }
        dispatch({
            type: PROJECT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
} 

// Delete Project

export const deleteProject = (id) => async dispatch => {
    try{
        const res = await axios.delete(`/api/projects/${id}`);

        dispatch ({
            type: DELETE_PROJECT,
            payload: res.data
        });

        dispatch(setAlert('Project Removed'));

        const res2 = await axios.get('api/projects');

        dispatch({
            type: GET_PROJECTS,
            payload: res2.data
        });

    }catch(err){
        dispatch({
            type: PROJECT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}