import { FIELD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FIELD_CHANGED:
            return {
                ...state,
                [action.payload.field]: action.payload.text,
            };
        case LOGIN_USER:
            return {
                ...state,
                loading: true,
                error: '',
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                ...INITIAL_STATE,
            };
        case LOGIN_USER_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
                password: '',
            };
        default:
            return state;
    }
};
