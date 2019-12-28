import {LOGIN, LOGOUT} from '../actions/constants'

const initialState = {
    isAuthenticated: false,
    loading: false,
    user: {},
    error: null,
  }

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
            };
        case LOGOUT:
            return {
                isAuthenticated: false
            };
        default:
            return state;
    }
};