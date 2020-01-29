import {RECEIVE_SEARCHED_USERS} from '../actions/search_actions';

const searchReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_SEARCHED_USERS:
            
            if (!action.data.users) return oldState
            return Object.assign({}, Object.values(action.data.users));
        default:
            return oldState;
    }
}

export default searchReducer;