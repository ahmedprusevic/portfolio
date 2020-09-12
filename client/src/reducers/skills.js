import { GET_SKILLS, SKILLS_ERROR } from '../actions/types';

const initialState = {
    loading: true,
    error: {},
    skills: []
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_SKILLS:
            return {
                ...state,
                skills: payload,
                loading: false
            };
        case SKILLS_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}