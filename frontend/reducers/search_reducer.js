import {RECEIVE_SEARCHED_USERS} from '../actions/search_actions';

const searchReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_SEARCHED_USERS:
            return Object.assign({}, action.users);
        default:
            return oldState;
    }
}

export default searchReducer;