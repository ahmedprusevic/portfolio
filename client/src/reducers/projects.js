import { GET_PROJECTS, GET_PROJECT_ID, PROJECT_ERROR } from "../actions/types";

const initialState = {
  loading: true,
  error: {},
  projects: [],
  project: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: payload,
        loading: false,
      };
    case GET_PROJECT_ID:
      return {
        ...state,
        project: payload,
        loading: false,
      };
    case PROJECT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
