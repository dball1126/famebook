import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import {RECEIEVE_ALL_USER_POSTS, RECEIVE_POST} from '../actions/post_actions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:

            return Object.assign({}, oldState, { [action.user.id]: action.user });
        case LOGOUT_CURRENT_USER:

            return {};
        case RECEIEVE_ALL_USER_POSTS:
        
            return Object.assign({}, oldState, {posts: Object.values(action.posts)})

        case RECEIVE_POST:
            debugger
            // need to update post in reducer
            return Object.assign({}, oldState)
        default:
            return oldState;
    }
}

export default usersReducer;