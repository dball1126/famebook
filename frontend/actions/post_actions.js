import * as PostApiUtil from '../util/post_api_util';

export const DELETE_POST = 'DELETE_POST';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIEVE_ALL_POSTS = 'RECEIEVE_ALL_POSTS';
export const RECEIEVE_ALL_USER_POSTS = 'RECEIEVE_ALL_USER_POSTS';

const receievePost = (post) => {
    
    return {
        type: RECEIVE_POST,
        post: post
    }
}
const receievePosts = (posts) => {
    
    return {
        type: RECEIEVE_ALL_POSTS,
        posts: posts
    }
}
const receieveUserPosts = (posts) => {
    
    return {
        type: RECEIEVE_ALL_USER_POSTS,
        posts: posts
    }
}

const destroyPost = ({ postId }) => {
    return {
        type: DELETE_POST,
        postId: postId
    }
}

export const fetchPost = (id) => {
    return (dispatch) => {
        return PostApiUtil.fetchPost(id).then(payload => {
            return dispatch(receievePost(payload))
        })
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        return PostApiUtil.fetchPosts().then(payload => {
            return dispatch(receievePosts(payload))
        })
    }
}

export const deletePost = (post) => {
    return (dispatch) => {
        return PostApiUtil.deletePost(post).then(payload => {
            // Careful payload.post.id may throw an error
            return dispatch(destroyPost(payload.post.id))
        })
    }
}

export const createPost = (post) => {
    return (dispatch) => {
        return PostApiUtil.createPost(post).then(payload => {
            return dispatch(receievePost(payload))
        })
    }
}

export const updatePost = (post) => {
    return (dispatch) => {
        return PostApiUtil.updatePost(post).then(payload => {
            return dispatch(receievePost(payload))
        })
    }
}

export const fetchUserPosts = (userId) => {
    
    return (dispatch) => {
        
        return PostApiUtil.fetchUserPosts(userId).then(payload => {
            
            return dispatch(receieveUserPosts(payload));
        })
    }
} 

export const createUserPost = (data) => {
    
    return (dispatch) => {
        return PostApiUtil.createUserPost(data).then(payload => {
            
            return dispatch(receievePost(payload))
        })
    }
}