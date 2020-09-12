import axios from 'axios';
import { setAlert } from './alert'; 
import { GET_SKILLS, SKILLS_ERROR, DELETE_SKILL } from './types';

// Get all skills

export const getAllSkills = () => async dispatch => {
    try{
        const res = await axios.get('api/skills');
        dispatch({
            type: GET_SKILLS,
            payload: res.data
        })
    } catch(err){
        dispatch({
            type: SKILLS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}


// Create Skill

export const createSkill = (formData, history) => async dispatch => {
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('/api/skills', formData, config);

        dispatch(setAlert('Skill Added'));

        dispatch({
            type: GET_SKILLS,
            payload: res.data
        });
        const res2 = await axios.get('api/skills');

        dispatch({
            type: GET_SKILLS,
            payload: res2.data
        });

        history.push('/skills');

    } catch(err) {
        const errors = err.response.data.errors;
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg)));
        }
        dispatch({
            type: SKILLS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

// Delete Skill

export const deleteSkill = id => async dispatch => {
    try{
        const res = await axios.delete(`/api/skills/${id}`);

        dispatch({
            type: DELETE_SKILL,
            payload: res.data
        });
        dispatch(setAlert('Skill Removed'));

        const res2 = await axios.get('api/skills');
        dispatch({
            type: GET_SKILLS,
            payload: res2.data
        });

    } catch(err){
        dispatch({
            type: SKILLS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}