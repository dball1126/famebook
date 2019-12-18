import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import {RECEIEVE_ALL_USER_POSTS} from '../actions/post_actions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:

            return Object.assign({}, oldState, { [action.user.id]: action.user });
        case LOGOUT_CURRENT_USER:

            return {};
        case RECEIEVE_ALL_USER_POSTS:
        
            return Object.assign({}, oldState, {posts: Object.values(action.posts)})
        default:
            return oldState;
    }
}

export default usersReducer;