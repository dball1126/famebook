import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const nullSession = Object.freeze({id: null});

const sessionReducer = (oldState = nullSession, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            
            return {user_id: action.user.id}
        case LOGOUT_CURRENT_USER:
            return nullSession;
        default:
            return oldState;
    }
}

export default sessionReducer;