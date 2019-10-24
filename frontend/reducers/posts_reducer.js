import { RECEIVE_POST, RECEIEVE_ALL_POSTS, DELETE_POST} from '../actions/post_actions';

const postsReducer = (oldstate = {}, action) => {
    Object.freeze(oldstate)
    switch (action.type) {
        case RECEIVE_POST:
            return Object.assign({}, oldState, {[action.post.id]: action.post})
        case RECEIEVE_ALL_POSTS:
            return Object.assign({}, oldstate, action.posts)
        case DELETE_POST:
            let newState = Object.assign({}, oldstate)
                delete newState[action.postId]
                
                return newState
        default:
            return oldstate;
    }
}

export default postsReducer;